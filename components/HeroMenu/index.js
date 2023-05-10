import styled from "styled-components";
import Link from "next/link";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function HeroMenu() {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink href="mailto:job@lutz-dietterich.de">
            <MdOutlineAlternateEmail />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="https://github.com/Lutz-Dietterich" target="blank">
            <AiFillGithub />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href="https://www.linkedin.com/in/lutz-d-83b1221b9/"
            target="blank"
          >
            <AiFillLinkedin />
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: absolute;
  top: 74%;
  left: 120px;
  display: flex;
  width: 22%;
  min-width: 300px;
  z-index: 1000;

  @media (max-width: 1400px) {
    left: 75px;
  }

  @media (max-width: 912px) {
    top: 75vh;
    left: 85vw;

    @media (min-height: 800px) {
      top: 80%;

    
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  margin-right: 60px;
  width: 100%;

  @media (max-width: 912px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  color: #e2e6f2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f7f7f7;
    transform: scale(1.1);
  }

  @media (max-width: 912px) {
    width: 40px;
    height: 40px;
    background: none;
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #252326;
  font-size: 3rem;
  line-height: 0;

  @media (max-width: 912px) {
    color: #a6806a;
    font-size: 2rem;
  }
`;
