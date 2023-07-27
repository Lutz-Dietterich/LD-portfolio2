import React from "react";
import styled from "styled-components";

import { useState } from "react";

import SocialMenuFooter from "../SocialMenuFooter";
import Impressum from "../Impressum";

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);

  const date = new Date();
  const year = date.getFullYear();

  const handleImpressumClick = () => {
    setShowImpressum(!showImpressum);
  };

  return (
    <StyledFooter id="footer">
      <SocialMenuFooter />
      <StyledCopy>© {year} Lutz Dietterich</StyledCopy>
      <StyledImpressumButton onClick={handleImpressumClick}>
        Impressum
      </StyledImpressumButton>
      {showImpressum && (
        <Impressum handleImpressumClick={handleImpressumClick} />
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

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
