import styled from "styled-components";
import Link from "next/link";

export default function MainMenu() {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink href="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="/about">Skills</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="/portfolio">Portfolio</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: absolute;
  top: 70%;
  left: 60px;
  display: flex;
  width: 20%;
  z-index: 1000;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-right: 60px;
  width: 100%;
`;

const StyledListItem = styled.li`
  background-color: #1a1a1a;
  font-size: 1rem;
  font-weight: 700;
  color: #e2e6f2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #f7f7f7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e2e6f2;

  &:hover {
    color: #f7f7f7;
  }
`;
