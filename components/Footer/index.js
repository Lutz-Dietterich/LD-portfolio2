import React from "react";
import styled from "styled-components";
import DataProtection from "../DataProtection";

import { useState } from "react";

import SocialMenuFooter from "../SocialMenuFooter";
import Impressum from "../Impressum";

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDataProtection, setShowDataProtection] = useState(false);

  const date = new Date();
  const year = date.getFullYear();

  const handleImpressumClick = () => {
    setShowImpressum(!showImpressum);
  };

  const handleDataProtectionClick = () => {
    setShowDataProtection(!showDataProtection);
  };

  return (
    <StyledFooter id="footer">
      <SocialMenuFooter />
      <StyledCopy>© {year} Lutz Dietterich</StyledCopy>
      <StyledLawWrapper>
        <StyledImpressumButton onClick={handleImpressumClick}>
          Impressum
        </StyledImpressumButton>
        <StyledLine>|</StyledLine>
        <StyledDataprotectionButton
          type="button"
          onClick={handleDataProtectionClick}
        >
          Datenschutzerklärung
        </StyledDataprotectionButton>
      </StyledLawWrapper>

      {showImpressum && (
        <Impressum handleImpressumClick={handleImpressumClick} />
      )}
      {showDataProtection && (
        <DataProtection handleDataProtectionClick={handleDataProtectionClick} />
      )}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
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

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const StyledLawWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledImpressumButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-text);
  border: none;
  color: var(--color-text-light);
  font-size: 1.1rem;
  text-align: center;
  padding: 10px;
  margin-left: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

const StyledLine = styled.p`
  color: white;
  font-size: 1.5;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledDataprotectionButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-text);
  border: none;
  color: var(--color-text-light);
  font-size: 1.1rem;
  text-align: center;
  padding: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    margin-bottom: 10px;

    font-size: 1rem;
  }
`;
