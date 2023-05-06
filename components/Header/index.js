import Image from "next/image";
import styled from "styled-components";

import MainMenu from "../MainMenu";
import MenuIconComponent from "../MenuIconComponent";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogoLarge
        src="/img/logo_large.png"
        width={380}
        height={112}
      ></StyledLogoLarge>

      <StyledLogoSmall
        src="/img/logo_small.png"
        width={380}
        height={112}
      ></StyledLogoSmall>

      <MainMenu />
      <MenuIconComponent />
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLogoSmall = styled(Image)`
  width: 30vw;
  height: 10vw;
  max-width: 380px;
  max-height: 112px;
  margin-left: 100px;

  @media (min-width: 769px) {
    display: none;
  }
`;
