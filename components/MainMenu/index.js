import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { smoothScroll } from "../../utils/smoothScroll";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (event, targetId) => {
    event.preventDefault();
    smoothScroll(targetId);
  };

  return (
    <StyledWrapper>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MenuIcon>

      <StyledNav isOpen={isOpen} className={isOpen ? "open" : ""}>
        <StyledList className={isOpen ? "open" : ""}>
          <StyledListItem>
            <StyledLink
              href="#about"
              onClick={(event) => handleClick(event, "#about")}
            >
              Über mich
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              href="#skills"
              onClick={(event) => handleClick(event, "#skills")}
            >
              Skills
            </StyledLink>
          </StyledListItem>
          {/* <StyledListItem>
            <StyledLink
              href="/portfolio"
              onClick={(event) => handleClick(event, "/portfolio")}
            >
              Portfolio
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              href="#footer"
              onClick={(event) => handleClick(event, "#footer")}
            >
              Kontakt
            </StyledLink>
          </StyledListItem> */}
        </StyledList>
      </StyledNav>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1000;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 50%;
  }
`;

const MenuIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  z-index: 1500;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;

  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};

  @media (max-width: 768px) {
    opacity: 0;
    position: absolute;
    left: 0px;
    display: flex;
    padding: 0;
    padding-top: 80px;
    padding-bottom: 20px;
    margin: 0;
    z-index: 500;
    width: 100%;
    height: 50vh;
    transition: all 2s ease-out;
  }

  &.open {
    position: absolute;
    opacity: 1;
    top: 0px;
    left: 0px;
    display: flex;
    padding: 0;
    padding-top: 80px;
    padding-bottom: 20px;
    margin: 0;
    z-index: 500;
    width: 100%;
    height: 50vh;
    background-color: rgba(37, 35, 38, 0.7);

    transition: all 0.2s ease-in-out;
  }
`;

//TODO: Main Menu wieder ändern wenn portfolio und contact me wieder da sind
// justify-content: flex-end;
// gap: 20px;  löschen

const StyledList = styled.ul`
  display: flex;

  justify-content: flex-end;
  gap: 20px;

  align-items: center;
  list-style: none;
  margin-right: 60px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  &.open {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
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
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-primary);
    color: #252326;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  &:last-child {
    background-color: var(--color-primary);
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
