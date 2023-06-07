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
            <p>Name: Lutz Dietterich</p>
            <p>Adresse: Beispielstraße 123, 12345 Beispielstadt</p>
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
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: var(--color-text);
  border: none;
  color: var(--color-text-light);
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
`;

const fadeIn = keyframes`
  from {
    width: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.0);
  }

  99% {
    background-color: rgba(0, 0, 0, 0.0);
  }

  to {
    width: 100%;
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
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: var(--color-text);
  line-height: 1;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 700;
`;
