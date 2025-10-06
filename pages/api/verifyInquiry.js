import nodemailer from "nodemailer";
import fs from "fs"; // Import für Dateisystem-Operationen
import path from "path"; // Import für Pfad-Operationen

// --- Konfiguration für persistente Speicherung (Datei) ---
const dataDir = path.join(process.cwd(), "data");
const inquiriesFilePath = path.join(dataDir, "inquiries.json");

// Funktion zum Laden der Anfragen aus der Datei
function loadInquiries() {
    try {
        if (fs.existsSync(inquiriesFilePath)) {
            const fileContent = fs.readFileSync(inquiriesFilePath, "utf8");
            // Stelle sicher, dass der Inhalt nicht leer ist
            return fileContent ? JSON.parse(fileContent) : [];
        }
    } catch (error) {
        console.error("Fehler beim Laden der Anfragen:", error);
    }
    // Wichtig: Immer ein leeres Array zurückgeben, falls die Datei nicht existiert oder fehlerhaft ist
    return [];
}

// Funktion zum Speichern der Anfragen in der Datei
function saveInquiries(inquiries) {
    try {
        // Stelle sicher, dass das 'data'-Verzeichnis existiert
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        fs.writeFileSync(inquiriesFilePath, JSON.stringify(inquiries, null, 2));
    } catch (error) {
        console.error("Fehler beim Speichern der Anfragen:", error);
    }
}
// -----------------------------------------------------------

// Ihre SMTP-Konfiguration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.ionos.de",
    port: process.env.EMAIL_PORT || 465,
    secure: process.env.EMAIL_SECURE === "true" || true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).send("Methode nicht erlaubt.");
    }

    const { token } = req.query; // Token kommt über die URL (Query-Parameter)

    if (!token) {
        return res.status(400).send("Fehler: Kein Verifizierungs-Token gefunden.");
    }

    // Anfragen aus dem persistenten Speicher laden
    const inquiries = loadInquiries();

    // 1. Anfrage anhand des Tokens finden
    // Der Fehler 'findIndex' of undefined ist hier behoben, da inquiries immer ein Array ist.
    const inquiryIndex = inquiries.findIndex((i) => i.verificationToken === token);
    const inquiry = inquiries[inquiryIndex];

    if (inquiryIndex === -1 || !inquiry) {
        return res
            .status(404)
            .send(
                "Fehler: Verifizierungs-Token ungültig oder nicht gefunden. Die Anfrage wurde möglicherweise bereits abgeschlossen oder ist abgelaufen."
            );
    }

    // 2. Gültigkeit und Ablauf prüfen
    if (inquiry.verified) {
        return res.status(400).send("Ihre Anfrage wurde bereits bestätigt.");
    }
    if (inquiry.expiresAt < Date.now()) {
        // Bei abgelaufenem Token die Anfrage aus dem Array entfernen und speichern
        inquiries.splice(inquiryIndex, 1);
        saveInquiries(inquiries);
        return res.status(400).send("Fehler: Der Verifizierungslink ist abgelaufen.");
    }

    // 3. E-Mail an SIE senden (die eigentliche, verifizierte Nachricht)
    const { companyName, firstName, lastName, email, message } = inquiry;

    // HTML für Ihre E-Mail (ähnlich dem ursprünglichen Code)
    let subject;
    let htmlToLutz;

    if (companyName) {
        subject = "VERIFIZIERTE Kontaktanfrage von " + companyName;
        htmlToLutz = `
            <h1>Hallo Lutz (VERIFIZIERT ✅)</h1>
            <p>Die Firma ${companyName} hat dir folgende Nachricht geschickt:</p>
            <p>Ansprechpartner: ${firstName} ${lastName}</p>
            <p>E-Mail: ${email}</p>
            <p>Nachricht: ${message}</p>
            <p>Bitte antworte so schnell wie möglich.</p>
            <p>Dein Kontaktformular</p>
            <p>PS: Diese E-Mail wurde automatisch generiert. Bitte antworte nicht auf diese E-Mail.</p>
        `;
    } else {
        subject = "VERIFIZIERTE Kontaktanfrage von " + firstName + " " + lastName;
        htmlToLutz = `
            <h1>Hallo Lutz (VERIFIZIERT ✅)</h1>
            <p>Du hast eine neue Kontaktanfrage von ${firstName} ${lastName} erhalten.</p>
            <p>E-Mail: ${email}</p>
            <p>Nachricht: ${message}</p>
            <p>Bitte antworte so schnell wie möglich.</p>
            <p>Dein Kontaktformular</p>
            <p>PS: Diese E-Mail wurde automatisch generiert. Bitte antworte nicht auf diese E-Mail.</p>
        `;
    }

    let mailOptionsToLutz = {
        from: "job@lutz-dietterich.de",
        to: "lutzdietterich@googlemail.com", // An Sie!
        subject: subject,
        html: htmlToLutz,
    };

    try {
        await transporter.sendMail(mailOptionsToLutz);

        // 4. Daten löschen, da die Anfrage erfolgreich abgeschlossen wurde
        // Dies verhindert, dass der Link ein zweites Mal verwendet wird
        inquiries.splice(inquiryIndex, 1);
        saveInquiries(inquiries); // Das bereinigte Array speichern

        // 5. Erfolg: Bestätigung für den Absender anzeigen
        res.status(200).send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Anfrage bestätigt</title>
                <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    .checkmark { color: green; font-size: 3em; margin-bottom: 20px; }
                </style>
            </head>
            <body>
                <div class="checkmark">✅</div>
                <h1>Anfrage erfolgreich verifiziert!</h1>
                <p>Ihre Nachricht wurde erfolgreich an Lutz Dietterich gesendet. Vielen Dank für die Bestätigung Ihrer E-Mail-Adresse.</p>
                <p>Sie können dieses Fenster jetzt schließen.</p>
            </body>
            </html>
        `);
    } catch (error) {
        console.error("Fehler beim Senden der finalen E-Mail:", error);
        res.status(500).send(
            "Verifizierung erfolgreich, aber Fehler beim Senden der finalen E-Mail an den Empfänger. Die Anfrage wurde trotzdem aus dem System entfernt."
        );
    }
}
