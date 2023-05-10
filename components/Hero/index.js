import styled from "styled-components";
import Image from "next/image";

import HeroMenu from "../HeroMenu";

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroImageOverlay />

      <StyledHeroImage
        src="/img/hero_background.png"
        width={1440}
        height={1024}
      />

      <StyledRectangle />

      <StyledHeroText>
        <p>Hi {"I'm"}</p>
        <h1>Lutz Dietterich</h1>
        <h2>Front-end Developer</h2>
      </StyledHeroText>

      <HeroMenu />

      <StyledHeroPortrait
        src="/img/hero_portrait.png"
        width={786}
        height={741}
      />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  overflow: hidden;
`;

const StyledHeroImage = styled(Image)`
  position: absolute;
  top: 0;
  left: -40%;
  z-index: -200;
  width: 150%;
  height: 150%;
  object-fit: cover;
  object-position: center;
  filter: blur(5px);
`;

const StyledHeroImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -110;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledRectangle = styled.div`
  position: absolute;
  width: 80vw;
  height: 175vh;
  left: -40vw;
  top: -50vh;
  z-index: -100;
  min-width: 600px;
  min-height: 300px;

  background: #e2e6f2;
  transform: rotate(13.3deg);

  @media (max-width: 912px) {
    position: absolute;
    width: 80vw;
    height: 160vh;
    left: 0;
    top: 40vh;

    background: rgba(226, 230, 242, 0.85);
    transform: rotate(-99.21deg);

    @media (min-height: 700px) {
      top: 35vh;

      @media (min-height: 800px) {
        top: 32vh;

        @media (min-height: 900px) {
          top: 30vh;

          @media (min-height: 1000px) {
            top: 28vh;



  }
`;

const StyledHeroText = styled.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40%;
  left: 120px;
  width: 30%;
  height: 10%;
  z-index: 100;

  line-height: 1.2;

  p {
    font-size: 1.9rem;
    font-weight: 400;
    color: #252326;
    margin: 0;
  }

  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    color: #252326;
    margin: 0;
  }
  @media (min-width: 1100px) {
    h1 {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #a6806a;
    margin: 0;
  }

  @media (max-width: 1400px) {
    left: 75px;
  }

  @media (max-width: 912px) {
    position: absolute;
    display: flex;
    flex-direction: column;

    top: 84%;
    left: 10%;
    width: 80%;
    height: 10%;
    z-index: 100;

    line-height: 1.2;

    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: #252326;
      margin: 0;
    }

    h1 {
      font-size: 2.1rem;
      font-weight: 700;
      color: #252326;
      margin: 0;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 400;
      color: #a6806a;
      margin: 0;
    }
  }
`;

const StyledHeroPortrait = styled(Image)`
  max-width: 912px;
  max-height: 741px;
  margin-top: auto;
  margin-left: 50vw;

  @media (max-height: 1100px) {
    width: 66vw;
    height: 62vw;
  }

  @media (max-height: 900px) {
    width: 45vw;
    height: 42vw;

  }

  @media (max-height: 560px) {
    width: 35vw;
    height: 33vw;

  }

  @media (max-width: 912px) {
    position: absolute;
    min-width: 592px;
    min-height: 585px;
    margin auto;
    bottom: 0;
    right: -144px;

    z-index: -105;
  }
`;
