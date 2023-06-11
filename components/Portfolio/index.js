import styled from "styled-components";

import PortfolioCarousel from "./PortfolioCarousel";
import Slider from "./Slider";

export default function Portfolio() {
  return (
    <StyledPortfolio id="portfolio">
      <h2>Portfolio</h2>
      {/* <PortfolioCarousel /> */}
      <Slider />
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  hyphens: auto;
  width: 100%;
  padding: var(--main-section-padding);
  background-color: var(--color-primary);

  letter-spacing: 0.1354em;
  text-align: center;
  word-spacing: 0.16em;

  h2 {
    margin: var(--h2-margin);
    text-transform: uppercase;
  }
`;
