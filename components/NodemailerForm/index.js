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
                // Pfad korrigiert: Es sollte nur '/api/recaptchaSubmit' sein,
                // da der Pfad vom Root der Anwendung aus gesehen wird.
                url: "/api/recaptchaSubmit",
                data: { gRecaptchaToken },
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (recaptchaResponse?.data?.success === true) {
                console.log(`Success with score: ${recaptchaResponse?.data?.score}`);
                setSubmit("ReCaptcha Verified and Form Submitted!");

                // 2. E-Mail senden, nur wenn Recaptcha erfolgreich war
                const emailResponse = await fetch("/api/sendEmail", { // Pfad korrigiert
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

                if (emailResponse.ok) {
                    setIsSent(true);
                    handleReset(); // Formular zurücksetzen

                    setTimeout(() => {
                        setIsSent(false);
                    }, 3500);
                } else {
                    console.error("E-Mail konnte nicht gesendet werden (Server-Fehler).");
                    setSubmit("E-Mail-Versand fehlgeschlagen.");
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

    return (
        <>
            {sendEmail && <StyledLoadingSpinner />}

            <StyledFormSection>
                {isSent && (
                    <div>
                        <p>E-Mail wurde gesendet!</p>
                        <Image src="/img/techny-receiving-a-letter-or-email.gif" width={500} height={500} alt="Checkmark" />
                        <p style={{ fontSize: "0.8rem" }}>
                            Illustration by
                            <a href="https://icons8.com/illustrations/author/627444">Julia G</a>
                            from <a href="https://icons8.com/illustrations">Ouch!</a>
                        </p>
                    </div>
                )}

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

                         <button type="submit" disabled={sendEmail}>Senden</button>
                        {submit && <p style={{marginTop: '10px'}}>{submit}</p>}
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
