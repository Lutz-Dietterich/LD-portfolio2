import nodemailer from "nodemailer";
import ReactDOMServer from "react-dom/server";

import EmailTemplate from "../../components/EmailTemplate";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, email, message } = req.body;

    // Erstelle den Nodemailer Transporter für Strato
    let transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true, // falls true, dann port: 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate firstName={firstName} message={message} />
    );

    // Konfiguriere die E-Mail-Daten
    let mailOptions1 = {
      from: "job@lutz-dietterich.de",
      to: email, // Empfänger-E-Mail-Adresse eintragen
      subject: "Neue Nachricht von Lutz Dietterich",
      text: message,
      html: emailContent,
    };

    let mailOptions2 = {
      from: "job@lutz-dietterich.de",
      to: "lutzdietterich@googlemail.com", // Zweite Empfänger-E-Mail-Adresse
      subject: "Du hast eine Kontaktanfrage von" + firstName + " erhalten",
      text: message,
    };

    try {
      // Sende die E-Mail
      await transporter.sendMail(mailOptions1);

      await transporter.sendMail(mailOptions2);

      res.status(200).json({ message: "E-Mail gesendet" });
    } catch (error) {
      res.status(500).json({ message: "E-Mail konnte nicht gesendet werden" });
    }
  } else {
    res.status(404).json({ message: "Seite nicht gefunden" });
  }
}
