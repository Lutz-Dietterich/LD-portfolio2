import styled from "styled-components";

import Hero from "../Hero";
import About from "../About";

export default function Main() {
  return (
    <StyledMain>
      <Hero />
      <About />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 912px) {
    max-width: 912px;
  }
`;
