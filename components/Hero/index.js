import React from "react";
import styled from "styled-components";
import Image from "next/image";

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
        <p>Hi I'm</p>
        <h1>Lutz Dietterich</h1>
        <h2>Frontend Developer</h2>
      </StyledHeroText>

      <StyledHeroMenu>
        <StyledHeroMenuList>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </StyledHeroMenuList>
      </StyledHeroMenu>

      <StyledHeroPortrait
        src="/img/hero_portrait.png"
        width={786}
        height={741}
      />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  display: flex;
  height: 100vh;
  max-height: 1024px;
  width: 100%;
  top: 0;
`;

const StyledHeroImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -200;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const StyledHeroImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -50;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
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
`;

const StyledHeroText = styled.article`
  position: absolute;
  top: 40%;
  left: 60px;
  z-index: 100;
  width: 30%;
  height: 10%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5rem;
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
`;

const StyledHeroMenu = styled.nav`
  position: absolute;
  top: 70%;
  left: 60px;
  z-index: 100;
  width: 30%;
  height: 10%;
  display: flex;
`;

const StyledHeroMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const StyledHeroPortrait = styled(Image)`
  max-width: 786px;
  max-height: 741px;
  margin-left: auto;
  margin-top: auto;
  margin-right: 10px;

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
`;
