import styled from "styled-components";

import Hero from "../Hero";
import About from "../About";
import ScrollToTopButton from "../ScrollToTopButton";

export default function Main() {
  return (
    <StyledMain>
      <Hero />
      <About />
      <ScrollToTopButton />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
