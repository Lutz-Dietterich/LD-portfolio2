// pages/api/verifyInquiry.js

import nodemailer from "nodemailer";
// Imports für MongoDB/Mongoose
import connectDB from "../../utils/dbConnect";
import Inquiry from "../../models/Inquiry";
// Wichtiger Hinweis: 'fs' und 'path' Imports wurden entfernt, da sie nicht mehr benötigt werden.

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
    // 0. Datenbankverbindung herstellen
    await connectDB();

    if (req.method !== "GET") {
        return res.status(405).send("Methode nicht erlaubt.");
    }

    const { token } = req.query; // Token kommt über die URL (Query-Parameter)

    if (!token) {
        return res.status(400).send("Fehler: Kein Verifizierungs-Token gefunden.");
    }

    try {
        // 1. Anfrage anhand des Tokens finden
        const inquiry = await Inquiry.findOne({
            verificationToken: token,
        }).exec();

        if (!inquiry) {
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

        // Prüfung des Ablaufdatums (inquiry.expiresAt ist ein Date-Objekt)
        if (inquiry.expiresAt < new Date()) {
            // Bei abgelaufenem Token das Dokument aus MongoDB löschen
            await Inquiry.deleteOne({ verificationToken: token });
            return res.status(400).send("Fehler: Der Verifizierungslink ist abgelaufen.");
        }

        // 3. E-Mail an SIE senden (die eigentliche, verifizierte Nachricht)
        const { companyName, firstName, lastName, email, message } = inquiry;

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

        await transporter.sendMail(mailOptionsToLutz);

        // 4. Daten löschen, da die Anfrage erfolgreich abgeschlossen wurde
        // Dokument aus MongoDB löschen, um Wiederverwendung des Tokens zu verhindern
        await Inquiry.deleteOne({ verificationToken: token });

        // 5. Erfolg: Bestätigung für den Absender anzeigen (mit UTF-8 Fix)
        const baseUrl = process.env.BASE_URL || "http://localhost:3000"; // Für den GIF-Pfad

        res.status(200).send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Anfrage bestätigt</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .checkmark { color: green; font-size: 3em; margin-bottom: 20px; }
                    .illustration { margin: 20px 0; }
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
        console.error("Fehler beim Verifizierungs-Prozess:", error);
        // Bei einem Fehler wird das Dokument nicht gelöscht, da der Prozess nicht erfolgreich war.
        res.status(500).send(
            "Ein Fehler ist während des Verifizierungsprozesses aufgetreten. Bitte wenden Sie sich direkt an den Administrator."
        );
    }
}
