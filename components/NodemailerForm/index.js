import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

import DataProtection from "../DataProtection";

export default function NodemailerForm() {
    const [companyName, setCompanyName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [sendEmail, setSendEmail] = useState(false);
    const [showDataProtection, setShowDataProtection] = useState(false);
    const [isDataProtectionChecked, setIsDataProtectionChecked] = useState(false);
    const [captchaToken, setCaptchaToken] = useState("");
    const [submit, setSubmit] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "companyName") {
            setCompanyName(value);
        } else if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    const { executeRecaptcha } = useGoogleReCaptcha();

    // Reset-Funktion außerhalb von handleSubmit definieren
    const handleReset = () => {
        setCompanyName("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setIsDataProtectionChecked(false); // Checkbox zurücksetzen
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit("");

        // Prüfung der Datenschutzerklärung
        if (!isDataProtectionChecked) {
            alert("Bitte stimmen Sie der Datenschutzerklärung zu.");
            return;
        }

        if (!executeRecaptcha) {
            console.error("Recaptcha-Funktion nicht verfügbar.");
            setSubmit("Recaptcha nicht verfügbar.");
            return;
        }

        // Ladespinner anzeigen, da wir gleich die Recaptcha-Prüfung starten
        setSendEmail(true);

        const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

        try {
            // 1. Recaptcha-Überprüfung
            const recaptchaResponse = await axios({
                method: "post",
                url: "/api/recaptchaSubmit",
                data: { gRecaptchaToken },
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (recaptchaResponse?.data?.success === true) {
                console.log(`Success with score: ${recaptchaResponse?.data?.score}`);
                // setSubmit("ReCaptcha Verified!"); // Diese Zeile kann entfernt werden, die nächste Meldung ist wichtiger.

                // 2. Anfragedaten an die NEUE API-Route senden (zum Speichern & Bestätigungslink senden)
                // HIER WIRD DIE VARIABLE KORRIGIERT:
                const initialResponse = await fetch("/api/storeInquiry", {
                    // <-- Response in 'initialResponse' gespeichert
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        companyName,
                        email,
                        message,
                    }),
                });

                if (initialResponse.ok) {
                    // <-- Prüft jetzt die korrekte Variable
                    // Erfolg: Informiere den Benutzer, dass er seine E-Mail prüfen muss
                    setSubmit(
                        "Vielen Dank! Wir haben Ihnen einen Bestätigungslink an Ihre E-Mail-Adresse gesendet. Bitte klicken Sie darauf, um Ihre Nachricht final zu übermitteln."
                    );
                    handleReset(); // Formular zurücksetzen
                    setShowSuccessPopup(true); // NEU: Pop-up anzeigen

                    // Wichtig: isSent bleibt false, da die E-Mail an Lutz erst später gesendet wird.
                } else {
                    console.error("Fehler bei der Kontaktspeicherung (Server-Fehler).");
                    setSubmit("Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
                }
            } else {
                console.log(`Failure with score: ${recaptchaResponse?.data?.score}`);
                setSubmit("Failed to verify recaptcha! You must be a robot!");
            }
        } catch (error) {
            console.error("Ein allgemeiner Fehler ist aufgetreten:", error);
            setSubmit("Fehler beim Senden oder der Recaptcha-Prüfung.");
        } finally {
            // Ladespinner am Ende immer ausblenden
            setSendEmail(false);
        }
    };

    const handleDataProtectionClick = () => {
        setShowDataProtection(!showDataProtection);
    };

    const handleCheckBoxClick = () => {
        if (isDataProtectionChecked === false) {
            setIsDataProtectionChecked(!isDataProtectionChecked);
        }
    };

    const handleCheckBoxFalse = () => {
        if (isDataProtectionChecked === true) {
            setIsDataProtectionChecked(!isDataProtectionChecked);
        }
    };

    // NEU: Pop-up schließen
    const closePopup = () => {
        setShowSuccessPopup(false);
    };

    return (
        <>
            {sendEmail && <StyledLoadingSpinner />}
            {/* NEU: Pop-up rendern, wenn showSuccessPopup true ist UND die Meldung erfolgreich ist */}
            {showSuccessPopup && submit.startsWith("Vielen Dank!") && (
                <StyledModalBackdrop onClick={closePopup}>
                    <StyledModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>Bitte Bestätige Deine E-MAIL!</h2>
                        <p>{submit}</p>
                        <StyledCloseButton onClick={closePopup}>Schließen</StyledCloseButton>
                    </StyledModalContent>
                </StyledModalBackdrop>
            )}

            <StyledFormSection>
                {!isSent && !sendEmail && (
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledFormGroup>
                            <label htmlFor="firstName">Firma</label>
                            <input type="text" name="companyName" value={companyName} onChange={handleChange} placeholder="Deine Firma" />
                        </StyledFormGroup>

                        <StyledNameGroup>
                            <StyledFormGroup>
                                <label htmlFor="firstName">
                                    Vorname <span>(Pflichtfeld)</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    placeholder="Dein Vorname"
                                    required
                                />
                            </StyledFormGroup>
                            <StyledFormGroup>
                                <label htmlFor="lastName">
                                    Nachname <span>(Pflichtfeld)</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                    placeholder="Dein Nachname"
                                    required
                                />
                            </StyledFormGroup>
                        </StyledNameGroup>
                        <StyledFormGroup>
                            <label htmlFor="email">
                                E-Mail <span>(Pflichtfeld)</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Deine E-Mail-Adresse"
                                required
                            />
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <label htmlFor="message">
                                Nachricht <span>(Pflichtfeld)</span>
                            </label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={handleChange}
                                placeholder="Gib hier Deine Nachricht ein"
                                required
                                type="text"
                            ></textarea>
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <label htmlFor="dataProtection">
                                <input
                                    type="checkbox"
                                    name="dataProtection"
                                    value="dataProtection"
                                    required
                                    checked={isDataProtectionChecked}
                                    onChange={handleCheckBoxClick}
                                />
                                Ich habe die
                                <button type="button" onClick={handleDataProtectionClick}>
                                    Datenschutzerklärung
                                </button>
                                gelesen und bin damit einverstanden.
                            </label>
                        </StyledFormGroup>

                        <button type="submit" disabled={sendEmail}>
                            Senden
                        </button>
                        {submit && <p style={{ marginTop: "10px" }}>{submit}</p>}
                    </StyledForm>
                )}

                {showDataProtection && (
                    <DataProtection
                        handleDataProtectionClick={handleDataProtectionClick}
                        handleCheckBox={handleCheckBoxClick}
                        handleCheckBoxFalse={handleCheckBoxFalse}
                    />
                )}
            </StyledFormSection>
        </>
    );
}

// ------------------------------------
// NEUE STYLED COMPONENTS FÜR DAS POP-UP
// ------------------------------------

const StyledModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const StyledModalContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    color: var(--color-text); /* Sicherstellen, dass der Text sichtbar ist */

    h2 {
        color: red;
        margin-bottom: 15px;
        font-style: none;
    }

    p {
        margin-bottom: 20px;
        font-size: 1.1rem;
        line-height: 1.4;
    }
`;

const StyledCloseButton = styled.button`
    padding: 10px 20px;
    background-color: lightgray;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;


    &:hover {
        background-color: #0056b3;
    }
`;

// ------------------------------------
// VORHANDENE STYLED COMPONENTS
// ------------------------------------

const StyledFormSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 600px;
    background-color: var(--color-primary);
    margin: 0 0 4rem 0;
    border-radius: 8px;

    @media (max-width: 768px) {
        width: 90%;
        min-width: 0;
    }
`;

const StyledLoadingSpinner = styled(LoadingSpinner)`
    background-color: transparent;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--color-primary);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    span {
        font-size: 0.7rem;
        margin-left: auto;
    }

    button {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 1rem;
        cursor: pointer;
    }
`;

const StyledFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    label {
        margin-bottom: 5px;
    }

    input,
    textarea {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 1rem;
        font-family: inherit;
    }

    textarea {
        resize: none;
        height: 200px;
    }

    button {
        background-color: transparent;
        border: none;
        color: var(--color-text);
        cursor: pointer;
        font-size: 1rem;
        text-decoration: underline;
        padding: 3.5px;
    }
`;

const StyledNameGroup = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-direction: row;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;
