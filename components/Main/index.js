import styled from "styled-components";

import Hero from "../Hero";
import About from "../About";
import Portfolio from "../Portfolio";
import ScrollToTopButton from "../ScrollToTopButton";

export default function Main() {
  return (
    <StyledMain>
      <Hero />
      <About />
      <Portfolio />
      <ScrollToTopButton />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    margin-bottom: -110px;
  }
`;
