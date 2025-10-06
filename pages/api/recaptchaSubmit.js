// pages/api/recaptchaSubmit.js

import axios from "axios";

// 🚨 KORREKTE Syntax für den Next.js PAGES Router
export default async function handler(req, res) {
    // Im Pages Router prüfen wir die Methode manuell
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: "Methode nicht erlaubt" });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY ist nicht gesetzt.");
        return res.status(500).json({ success: false, error: "Serverkonfiguration fehlerhaft" });
    }

    // Die Daten sind im Pages Router direkt in req.body verfügbar
    const { gRecaptchaToken } = req.body;

    // Korrekte Erstellung des FormData-Strings
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    let response;

    try {
        response = await axios.post("https://www.google.com/recaptcha/api/siteverify", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    } catch (e) {
        console.error("Fehler bei der Recaptcha-Überprüfung durch Google:", e);
        // Nutzen Sie res.status().json() anstelle von NextResponse.json()
        return res.status(500).json({ success: false, error: "API-Fehler bei Google-Anfrage" });
    }

    const data = response.data;

    // Standard-Prüfung und Score-Schwellenwert
    if (data?.success && data.score > 0.5) {
        console.log("ReCAPTCHA-Score:", data.score);
        return res.status(200).json({
            success: true,
            score: data.score,
        });
    } else {
        console.log("ReCAPTCHA-Überprüfung fehlgeschlagen. Score:", data.score, "Fehlercodes:", data["error-codes"]);
        return res.status(200).json({
            success: false,
            score: data.score || 0,
            errorCodes: data["error-codes"],
        });
    }
}
