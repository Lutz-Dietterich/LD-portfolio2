import GlobalStyle from "../styles";
import Head from "next/head";
// 1. Provider importieren
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// **WICHTIG:** Den Site Key (den öffentlichen Schlüssel) aus den Umgebungsvariablen holen
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function App({ Component, pageProps }) {
    // Stellen Sie sicher, dass der Schlüssel vorhanden ist, bevor Sie den Provider rendern
    if (!RECAPTCHA_SITE_KEY) {
        console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY ist in .env.local nicht gesetzt!");
        // Optional: Hier könnten Sie die App ohne Recaptcha rendern oder einen Fehler anzeigen
    }

    return (
        // 2. Die gesamte Anwendung mit dem Provider umschließen
        <GoogleReCaptchaProvider
            reCaptchaKey={RECAPTCHA_SITE_KEY || "dummy-key-for-safety"}
            // Empfohlene Skript-Eigenschaften für bessere Performance
            scriptProps={{
                async: true,
                defer: true,
                appendTo: "head",
            }}
        >
            <GlobalStyle />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Lutz Dietterich - WEB DEVELOPMENT</title>
                <meta name="description" content="Lutz Dietterich - Web Developer aus Lauenburg" />
            </Head>
            {/* 3. Die eigentliche Seite als Kind-Komponente rendern */}
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
    );
}
