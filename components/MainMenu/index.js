import styled from "styled-components";
import Link from "next/link";

export default function MainMenu() {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink href="/">About me</StyledLink>
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

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledListItem = styled.li`
  padding: 5px 10px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #e2e6f2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e2e6f2;
    color: #252326;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  &:last-child {
    background-color: #e2e6f2;
    font-size: 1.1rem;
    color: #252326;
    padding: 6px 11px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #f7f7f7;
      color: #252326;
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
  }
`;
