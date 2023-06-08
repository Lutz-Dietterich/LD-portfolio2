import styled from "styled-components";

import PortfolioCarousel from "./PortfolioCarousel";

export default function Portfolio() {
  return (
    <StyledPortfolio id="portfolio">
      <h2>Portfolio</h2>
      <PortfolioCarousel />
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  hyphens: auto;
  width: 100%;
  padding: 3rem;
  background-color: var(--color-primary);

  letter-spacing: 0.1354em;
  text-align: center;
  word-spacing: 0.16em;

  h2 {
    margin: var(--h2-margin);
    text-transform: uppercase;
  }

  @media (max-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
