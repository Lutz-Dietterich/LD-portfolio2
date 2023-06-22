import nodemailer from "nodemailer";
import ReactDOMServer from "react-dom/server";

import EmailTemplate from "../../components/EmailTemplate";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

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
      <EmailTemplate name={name} message={message} />
    );

    // Konfiguriere die E-Mail-Daten
    let mailOptions = {
      from: "job@lutz-dietterich.de",
      to: email, // Empfänger-E-Mail-Adresse eintragen
      subject: "Neue Nachricht von " + name,
      text: message,
      html: emailContent,
    };

    try {
      // Sende die E-Mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "E-Mail gesendet" });
    } catch (error) {
      res.status(500).json({ message: "E-Mail konnte nicht gesendet werden" });
    }
  } else {
    res.status(404).json({ message: "Seite nicht gefunden" });
  }
}
