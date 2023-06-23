import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { router } from "next/router";

export default function NodemailerForm() {
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  //   const router = useRouter();

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

    if (!captchaToken) {
      return;
    }

    try {
      const response = await fetch("../api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email, message, captchaToken }),
      });

      if (response.ok) {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3500);
      } else {
        console.log("E-Mail konnte nicht gesendet werden");
      }
    } catch (error) {
      console.log("Fehler beim Senden der E-Mail");
    }
  };

  useEffect(() => {
    // Laden der reCAPTCHA Bibliothek
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=process.env.CAPCHA_SECRET_KEY";
    script.async = true;
    document.body.appendChild(script);

    // Generieren des Captcha-Tokens
    const generateCaptchaToken = async () => {
      try {
        const token = await grecaptcha.execute(
          "process.env.CAPCHA_SECRET_KEY",
          {
            action: "submit",
          }
        );
        setCaptchaToken(token);
      } catch (error) {
        console.log("Fehler beim Generieren des Captcha-Tokens");
      }
    };

    // Überprüfen, ob die reCAPTCHA-Bibliothek geladen wurde
    if (typeof window !== "undefined" && typeof grecaptcha !== "undefined") {
      generateCaptchaToken();
    }
  }, []);

  return (
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
            </a>{" "}
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
        </div>
      )}

      {!isSent && (
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormGroup>
            <label htmlFor="firstName">Firma</label>
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={handleChange}
              placeholder="Gib hier den Namen Deiner Firma ein"
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
                placeholder="Gib hier Deinen Vornamen ein"
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
                placeholder="Gib hier Deinen Nachnamen ein"
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
              placeholder="Gib hier Deine E-Mail-Adresse ein"
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
              />
              Ich habe die Datenschutzerklärung gelesen und bin damit
              einverstanden.
            </label>
          </StyledFormGroup>
          <StyledFormGroup>
            <div
              className="g-recaptcha"
              data-sitekey="6LcwDMMmAAAAAP6kmbVVs5rL7pHYYn7n3lNvSPup"
              data-callback="onCaptchaSubmit"
            ></div>
          </StyledFormGroup>
          <button type="submit">Senden</button>
        </StyledForm>
      )}
    </StyledFormSection>
  );
}

const StyledFormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: var(--color-primary);
  margin: 0 0 4rem 0;
  border-radius: 8px;
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
`;

const StyledNameGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;
