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
        <StyledListItem>
          <StyledLink href="#footer">CONTACT ME</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  width: 50%;
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
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
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
