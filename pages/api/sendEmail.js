import nodemailer from "nodemailer";
import ReactDOMServer from "react-dom/server";

import EmailTemplate from "../../components/EmailTemplate";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { companyName, firstName, lastName, email, message } = req.body;

    // Erstelle den Nodemailer Transporter für Strato
    let transporter = nodemailer.createTransport({
      host: "smtp.ionos.de",
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
    let subject;
    let html;

    if (companyName) {
      subject = "Du hast eine Kontaktanfrage von " + companyName + " erhalten";
      html = `
        <h1>Hallo Lutz</h1>
        <p>Die Firma ${companyName} hat dir folgende Nachricht geschickt:</p>
        <p>Ansprechpartner: ${firstName} ${lastName}</p>
        <p>E-Mail: ${email}</p>
        <p>Nachricht: ${message}</p>
        <p>Bitte antworte so schnell wie möglich.</p>
        <p>Dein Kontaktformular</p>
        <p>PS: Diese E-Mail wurde automatisch generiert. Bitte antworte nicht auf diese E-Mail.</p>
      `;
    } else {
      subject = "Neue Kontaktanfrage von " + firstName + " " + lastName;
      html = `
        <h1>Hallo Lutz</h1>
        <p>Du hast eine neue Kontaktanfrage von ${firstName} ${lastName} erhalten.</p>
        <p>E-Mail: ${email}</p>
        <p>Nachricht: ${message}</p>
        <p>Bitte antworte so schnell wie möglich.</p>
        <p>Dein Kontaktformular</p>
        <p>PS: Diese E-Mail wurde automatisch generiert. Bitte antworte nicht auf diese E-Mail.</p>
      `;
    }

    let mailOptions1 = {
      from: "job@lutz-dietterich.de",
      to: email,
      subject: "Neue Nachricht von Lutz Dietterich",
      text: message,
      html: emailContent,
    };

    let mailOptions2 = {
      from: "job@lutz-dietterich.de",
      to: "lutzdietterich@googlemail.com",
      subject: subject,
      text: message,
      html: html,
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
