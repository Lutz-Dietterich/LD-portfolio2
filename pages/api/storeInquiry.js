// pages/api/storeInquiry.js

import nodemailer from "nodemailer";
import crypto from "crypto";
import fs from "fs"; // Import für Dateisystem-Operationen
import path from "path"; // Import für Pfad-Operationen

// --- Konfiguration für persistente Speicherung (Datei) ---
const dataDir = path.join(process.cwd(), 'data');
const inquiriesFilePath = path.join(dataDir, 'inquiries.json');

// Funktion zum Laden der Anfragen aus der Datei
function loadInquiries() {
    try {
        if (fs.existsSync(inquiriesFilePath)) {
            const fileContent = fs.readFileSync(inquiriesFilePath, 'utf8');
            // Stelle sicher, dass der Inhalt nicht leer ist
            return fileContent ? JSON.parse(fileContent) : [];
        }
    } catch (error) {
        console.error('Fehler beim Laden der Anfragen:', error);
    }
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
        console.error('Fehler beim Speichern der Anfragen:', error);
    }
}
// -----------------------------------------------------------


// Funktion zur Token-Generierung (z.B. 32 zufällige Bytes in Hex)
const generateToken = () => crypto.randomBytes(32).toString("hex");

// Ihre SMTP-Konfiguration (Bitte in .env eintragen)
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.ionos.de", // Besser aus .env, aber Fallback gesetzt
    port: process.env.EMAIL_PORT || 465, // Besser aus .env
    secure: process.env.EMAIL_SECURE === 'true' || true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { companyName, firstName, lastName, email, message } = req.body;

        // 1. Token und Ablaufdatum generieren
        const verificationToken = generateToken();
        const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // Token ist 24 Stunden gültig

        // 2. Daten speichern (WICHTIG!)
        // Daten aus der Datei laden
        const inquiries = loadInquiries();

        const newInquiry = {
            id: Date.now(),
            companyName,
            firstName,
            lastName,
            email,
            message,
            verificationToken,
            verified: false,
            expiresAt,
        };

        inquiries.push(newInquiry);
        saveInquiries(inquiries); // Das aktualisierte Array in die Datei schreiben

        console.log(`Anfrage gespeichert: ${newInquiry.id}. Aktuelle Anfragen: ${inquiries.length}`);

        // 3. Bestätigungslink erstellen
        const baseUrl = process.env.BASE_URL || "http://localhost:3001"; // localhost:3000 ist der Standard in Next.js
        const verificationLink = `${baseUrl}/api/verifyInquiry?token=${verificationToken}`;

        // 4. Bestätigungs-E-Mail an den ABSENDER versenden
        let mailOptionsToSender = {
            from: "job@lutz-dietterich.de",
            to: email, // An den Absender!
            subject: "Ihre Kontaktanfrage bestätigen",
            html: `
                <h1>Hallo ${firstName}</h1>
                <p>Vielen Dank für Ihre Anfrage. Bitte klicken Sie auf den Link, um Ihre E-Mail-Adresse zu verifizieren und Ihre Nachricht an uns weiterzuleiten:</p>
                <p><a href="${verificationLink}">Anfrage jetzt bestätigen</a></p>
                <p>Dieser Link ist 24 Stunden gültig. Wenn Sie diese Anfrage nicht gesendet haben, können Sie diese E-Mail ignorieren.</p>
                <p style="font-size: 0.8em; color: #777;">Ihre Nachricht (wird nach Bestätigung gesendet): ${message.substring(
                    0,
                    100
                )}...</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptionsToSender);
            // Antwort an das Frontend
            res.status(200).json({
                message:
                    "Vielen Dank! Ein Bestätigungslink wurde an Ihre E-Mail-Adresse gesendet. Bitte prüfen Sie Ihren Posteingang (und ggf. Spam-Ordner).",
            });
        } catch (error) {
            console.error("Fehler beim Senden der Bestätigungs-E-Mail:", error);
            // Optional: Bei einem Fehler die gerade gespeicherte Anfrage wieder entfernen
            // Inquiries erneut laden, die aktuelle ID suchen und entfernen

            res.status(500).json({ message: "Fehler beim Versenden des Bestätigungslinks. Bitte versuchen Sie es später erneut." });
        }
    } else {
        res.status(404).json({ message: "Seite nicht gefunden" });
    }
}
