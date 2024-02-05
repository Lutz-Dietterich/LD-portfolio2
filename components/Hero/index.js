import styled from "styled-components";
import Image from "next/image";

import SocialMenuHero from "../SocialMenuHero";

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroImageOverlay />

      <StyledHeroImage
        src="/img/hero_background.png"
        alt="Lutz Dietterich"
        width={1440}
        height={1024}
      />

      <StyledRectangle />

      <StyledHeroText>
        <p>Hi, ich bin</p>
        <h1>Lutz Dietterich</h1>
        <h2>Front-end Developer</h2>
      </StyledHeroText>

      <SocialMenuHero />

      <StyledHeroPortrait
        src="/img/hero_portrait.png"
        alt="Lutz Dietterich"
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
  filter: blur(3px) brightness(1.1);
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
  left: -43vw;
  top: -50vh;
  z-index: -100;
  min-width: 600px;
  min-height: 300px;

  background: linear-gradient(172.31deg, #fff 10%, #e2e6f2 50%);
  transform: rotate(13.3deg);

  @media (max-width: 912px) {
    position: absolute;
    width: 80vw;
    height: 160vh;
    left: 90px;
    top: 30vh;

    background: rgba(226, 230, 242, 0.85);
    transform: rotate(-99.21deg);

    @media screen and (max-height: 1000px) {
      top: 36vh;
    }

    @media screen and (max-height: 900px) {
      top: 26vh;
    }

    @media screen and (max-height: 800px) {
      top: 28vh;
    }

    @media screen and (max-height: 700px) {
      top: 31vh;
    }

    @media screen and (max-height: 600px) {
      height: 230vh;
    }

    @media screen and (max-height: 460px) {
      height: 260vh;
      transform: rotate(-83deg);
    }
  }
`;

const StyledHeroText = styled.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40%;
  left: 8vw;
  width: 30%;
  height: 10%;

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
  @media screen and (min-width: 1100px) {
    h1 {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-secondary);
    margin: 0;
  }

  @media screen and (max-width: 1400px) {
    left: 5vw;
  }

  @media (max-width: 912px) {
    position: absolute;
    display: flex;
    flex-direction: column;

    top: 78%;
    left: 10%;
    width: 80%;
    height: 10%;

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
      color: var(--color-secondary);
      margin: 0;
    }

    @media (max-height: 1100px) {
      top: 87%;
      left: 10%;
    }

    @media (max-height: 900px) {
      top: 79%;
      left: 10%;
    }

    @media (max-height: 700px) {
      top: 75%;
      left: 10%;
    }

    @media (max-height: 460px) {
      top: 69%;
      left: 5%;
    }
  }
`;

const StyledHeroPortrait = styled(Image)`
  max-width: 790px;
  max-height: 741px;
  margin-top: auto;
  margin-left: 50vw;
  -webkit-filter: brightness(90%);
    filter: brightness(90%);

    
    
    @media screen and (max-width: 912px) {
      position: absolute;
      min-width: 592px;
      min-height: 585px;
      margin auto;
      bottom: 50px;
      right: -144px;
      
      z-index: -105;
    }


    @media screen and (max-height: 1100px) {
      width:100vw;
      height: 100vw;
      bottom: 0;
    }

    @media screen and (max-height: 900px) {
      width: 55vw;
      height: 52vw;
      
    }
    
    @media screen and (max-height: 560px) {
      width: 35vw;
      height: 33vw;
    }

    @media screen and (max-height: 460px) {
      min-width: 192px;
      min-height: 185px;
      width: 35vw;
      height: 33vw;
      right: 10px;
    }

`;
