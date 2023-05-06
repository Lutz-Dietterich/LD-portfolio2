import Image from "next/image";
import styled from "styled-components";

import MainMenu from "../MainMenu";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo
        src="/img/logo_large.png"
        width={380}
        height={112}
      ></StyledLogo>
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
`;

const StyledLogo = styled(Image)`
  width: 30vw;
  height: 10vw;
  max-width: 380px;
  max-height: 112px;
  margin-left: 60px;
`;
