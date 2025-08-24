import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { smoothScroll } from "../../utils/smoothScroll";

export default function MainMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
        if (router.pathname === "/") {
            event.preventDefault();
            smoothScroll(targetId);
        }
    };

    return (
        <StyledWrapper>
            <MenuIcon onClick={toggleMenu}>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</MenuIcon>

            <StyledNav isOpen={isOpen} className={isOpen ? "open" : ""}>
                <StyledList className={isOpen ? "open" : ""}>
                    <StyledListItem onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <StyledLink href="/#about" onClick={(event) => handleClick(event, "#about")}>
                            Über mich
                        </StyledLink>
                        {isDropdownOpen && (
                            <Dropdown>
                                <DropdownItem href="/cv">Lebenslauf</DropdownItem>
                            </Dropdown>
                        )}
                    </StyledListItem>

                    <StyledListItem>
                        <StyledLink href="/#skills" onClick={(event) => handleClick(event, "#skills")}>
                            Skills
                        </StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink href="/#portfolio" onClick={(event) => handleClick(event, "#portfolio")}>
                            Portfolio
                        </StyledLink>
                    </StyledListItem>

                    <StyledListItem>
                        <StyledLink href="/#contact" onClick={(event) => handleClick(event, "#contact")}>
                            Kontakt
                        </StyledLink>
                    </StyledListItem>
                </StyledList>
            </StyledNav>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;

    @media (min-width: 768px) {
        flex-direction: row;
        width: 75%;
    }

    @media (min-width: 900px) {
        width: 61%;
    }

    @media (min-width: 1100px) {
        width: 55%;
    }

    @media (min-width: 1300px) {
        width: 45%;
    }
`;

const MenuIcon = styled.div`
    margin-left: auto;
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
    z-index: 1500;

    @media (min-width: 800px) {
        display: none;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    width: 100%;

    z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};

    @media (max-width: 800px) {
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

const StyledList = styled.ul`
    display: flex;

    justify-content: space-around;
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
    position: relative;
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

const Dropdown = styled.ul`
    position: absolute;
    top: 100%; /* direkt unter "Über mich" */
    left: 20px;
    /*background-color: var(--color-text);*/
    list-style: none;
    font-size: 1rem;
    padding: 5px 0;
    margin: 0;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const DropdownItem = styled(Link)`
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 5px;
    color: var(--color-primary);
    &:hover {
        background-color: var(--color-primary);
        color: #252326;
    }
`;
