import Image from "next/image";
import styled from "styled-components";

import MainMenu from "../MainMenu";

export default function Header() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledHeader>
      <StyledLogoLarge
        onClick={handleScrollToTop}
        src="/img/logo_large.png"
        alt="Lutz Dietterich"
        width={380}
        height={112}
      ></StyledLogoLarge>

      <StyledLogoSmall
        src="/img/logo_small.png"
        alt="Lutz Dietterich"
        width={380}
        height={112}
      ></StyledLogoSmall>

      <MainMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  height: 20vw;
  max-height: 180px;
  z-index: 2000;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 912px) {
    justify-content: space-between;
    padding: 0 40px;
    width: 100%;
    height: 25vw;
    max-height: 180px;
  }
`;

const StyledLogoLarge = styled(Image)`
  width: 30vw;
  height: 10vw;
  max-width: 380px;
  max-height: 112px;
  margin-left: 100px;

  @media (max-width: 1400px) {
    margin-left: 55px;
  }

  @media (max-width: 912px) {
    display: none;
  }
`;

const StyledLogoSmall = styled(Image)`
  width: 26vw;
  height: 18vw;
  max-width: 144px;
  max-height: 98px;
  z-index: 2000;

  @media (min-width: 913px) {
    display: none;
  }
`;
