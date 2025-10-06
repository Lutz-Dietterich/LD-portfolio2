// pages/api/storeInquiry.js

import nodemailer from "nodemailer";
import crypto from "crypto";
// Importe für MongoDB/Mongoose (sind im Code vorhanden)
import connectDB from "../../utils/dbConnect";
import Inquiry from "../../models/Inquiry";

// ACHTUNG: Die Imports für 'fs' und 'path' sowie die Funktionen
// 'loadInquiries' und 'saveInquiries' wurden entfernt, da sie nicht mehr benötigt werden!

// Funktion zur Token-Generierung (z.B. 32 zufällige Bytes in Hex)
const generateToken = () => crypto.randomBytes(32).toString("hex");

// Ihre SMTP-Konfiguration (Bitte in .env eintragen)
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

    if (req.method === "POST") {
        const { companyName, firstName, lastName, email, message } = req.body;

        // 1. Token und Ablaufdatum generieren
        const verificationToken = generateToken();
        const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // Token ist 24 Stunden gültig

        // 2. Neues Anfrage-Dokument erstellen
        const newInquiry = new Inquiry({
            companyName,
            firstName,
            lastName,
            email,
            message,
            verificationToken,
            verified: false,
            // Speichern als Date-Objekt, wichtig für MongoDB TTL Index (Aufräummechanismus)
            expiresAt: new Date(expiresAt),
        });

        // 3. Bestätigungslink erstellen
        // Verwenden Sie den tatsächlichen Standardport für Next.js
        const baseUrl = process.env.BASE_URL || "http://localhost:3001";
        const verificationLink = `${baseUrl}/api/verifyInquiry?token=${verificationToken}`;

        // 4. Bestätigungs-E-Mail an den ABSENDER vorbereiten
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
            // Speichern in der Datenbank
            await newInquiry.save();
            console.log(`Anfrage erfolgreich in MongoDB gespeichert (ID: ${newInquiry._id})`);

            // Bestätigungs-E-Mail senden
            await transporter.sendMail(mailOptionsToSender);

            // Antwort an das Frontend
            res.status(200).json({
                message:
                    "Vielen Dank! Ein Bestätigungslink wurde an Ihre E-Mail-Adresse gesendet. Bitte prüfen Sie Ihren Posteingang (und ggf. Spam-Ordner).",
            });
        } catch (error) {
            console.error("Fehler bei der DB-Speicherung oder dem E-Mail-Versand:", error);

            // Optional: Wenn die DB-Speicherung fehlschlägt, versuchen Sie, das ungespeicherte Dokument zu behandeln (hier nicht nötig)
            // oder wenn der E-Mail-Versand fehlschlägt, löschen Sie das Dokument wieder aus der DB,
            // um den Benutzer nicht mit einem nutzlosen Token zurückzulassen.

            // Wichtig: Da wir Mongoose verwenden, benötigen wir hier keine manuelle Dateilogik mehr.
            res.status(500).json({
                message: "Ein interner Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
            });
        }
    } else {
        res.status(405).json({ message: "Methode nicht erlaubt" });
    }
}
