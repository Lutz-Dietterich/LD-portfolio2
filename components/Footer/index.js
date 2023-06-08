import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { keyframes } from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

import SocialMenuFooter from "../SocialMenuFooter";

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);

  const handleImpressumClick = () => {
    setShowImpressum(!showImpressum);
  };

  console.log(showImpressum);

  return (
    <StyledFooter id="footer">
      <SocialMenuFooter />
      <StyledCopy>© 2023 Lutz Dietterich</StyledCopy>
      <StyledImpressumButton onClick={handleImpressumClick}>
        Impressum
      </StyledImpressumButton>

      {showImpressum && (
        <StyledImpressumPopup>
          <StyledImpressumContent>
            <CloseButton onClick={handleImpressumClick}>
              <AiOutlineClose />
            </CloseButton>
            <h2>Impressum</h2>

            <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
            <p>
              Lutz Dietterich
              <br />
              Gl&uuml;singer Weg 2<br />
              21481 Lauenburg/Elbe
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: 015780992549
              <br />
              E-Mail: job@lutz-dietterich.de
            </p>

            <p>
              Quelle:{" "}
              <a href="https://www.e-recht24.de/impressum-generator.html">
                https://www.e-recht24.de/impressum-generator.html
              </a>
            </p>
          </StyledImpressumContent>
        </StyledImpressumPopup>
      )}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35vh;
  background-color: var(--color-text);

  z-index: -2000;
`;

const StyledCopy = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  color: var(--color-text-light);
  font-size: 1.2rem;
  text-align: center;
`;

const StyledImpressumButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: var(--color-text);
  border: none;
  color: var(--color-text-light);
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const fadeIn = keyframes`
  from {
    height: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.0);
  }

  99% {
    background-color: rgba(0, 0, 0, 0.0);
  }

  to {
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledImpressumPopup = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledImpressumContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: var(--color-text);
  line-height: 1;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    min-width: 300px;
    margin: 10px;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 700;
`;
