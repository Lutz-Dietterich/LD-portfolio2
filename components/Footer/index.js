import React from "react";
import styled from "styled-components";

import SocialMenuFooter from "../SocialMenuFooter";

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <SocialMenuFooter />
      <StyledCopy>© 2023 Lutz Dietterich</StyledCopy>
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
