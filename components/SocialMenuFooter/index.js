import styled from "styled-components";
import Link from "next/link";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialMenuHero() {
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 4rem;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  list-style: none;
  width: 15vw;
  padding: 0;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid var(--color-primary);

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f7f7f7;
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);
  font-size: 3rem;
  line-height: 0;
`;
