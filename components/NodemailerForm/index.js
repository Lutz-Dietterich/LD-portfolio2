import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingSpinner from "../LoadingSpinner";
import { CLIENT_STATIC_FILES_RUNTIME_MAIN } from "next/dist/shared/lib/constants";

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
  //   const [captchaToken, setCaptchaToken] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!captchaToken) {
    //   return;
    // }

    setSendEmail(true);

    const handleReset = () => {
      setCompanyName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    };

    try {
      const response = await fetch("../api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email, message }),
      });

      if (response.ok) {
        setIsSent(true);
        setSendEmail(false);

        setTimeout(() => {
          setIsSent(false);
        }, 3500);
        handleReset();
      } else {
        console.log("E-Mail konnte nicht gesendet werden");
      }
    } catch (error) {
      console.log("Fehler beim Senden der E-Mail");
    }
  };

  const handleDataProtectionClick = () => {
    setShowDataProtection(!showDataProtection);
  };

  const handleCheckBoxClick = () => {
    setIsDataProtectionChecked(!isDataProtectionChecked);
  };

  return (
    <>
      {sendEmail && <StyledLoadingSpinner />}

      <StyledFormSection>
        {isSent && (
          <div>
            <p>E-Mail wurde gesendet!</p>
            <Image
              src="/img/techny-receiving-a-letter-or-email.gif"
              width={500}
              height={500}
              alt="Checkmark"
            />
            <p style={{ fontSize: "0.8rem" }}>
              Illustration by
              <a href="https://icons8.com/illustrations/author/627444">
                Julia G
              </a>
              from <a href="https://icons8.com/illustrations">Ouch!</a>
            </p>
          </div>
        )}

        {!isSent && !sendEmail && (
          <StyledForm onSubmit={handleSubmit}>
            <StyledFormGroup>
              <label htmlFor="firstName">Firma</label>
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleChange}
                placeholder="Deine Firma"
              />
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
            {/* <StyledFormGroup>
            <ReCAPTCHA
              sitekey={"process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY"}
              onChange={(token) => setCaptchaToken(token)}
            />
          </StyledFormGroup> */}
            <button type="submit">Senden</button>
          </StyledForm>
        )}

        {showDataProtection && (
          <DataProtection
            handleDataProtectionClick={handleDataProtectionClick}
            handleCheckBox={handleCheckBoxClick}
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
