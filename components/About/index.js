import styled from "styled-components";

import Teaser from "../About/Teaser";
import Skills from "../About/Skills";

export default function About() {
  return (
    <StyledSection>
      <Teaser />
      <Skills />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(226, 230, 242, 0) 22.22%,
    #e2e5f2 93.58%
  );

  @media (max-width: 768px) {
    margin-top: -50px;
    margin-bottom: -20vw;
  }
`;
