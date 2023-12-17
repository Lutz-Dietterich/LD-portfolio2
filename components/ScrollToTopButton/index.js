import { BsChevronCompactUp } from "react-icons/bs";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledButton
      style={{ display: visible ? "inline" : "none" }}
      onClick={handleScrollToTop}
    >
      <StyledIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  max-width: 2rem;
  max-height: 2rem;
  position: fixed;
  bottom: 70px;
  right: 20px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  background-color: var(--color-button);
  opacity: 0.7;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  z-index: 1000;

  &:hover {
    background-color: var(--color-button);
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    position: relative;
    background-color: transparent;
    box-shadow: none;
    width: 20%;
    color: black;
    bottom: 10px;
    right: 0;

    &:hover {
      background-color: transparent;
      transform: scale(1.1);
    }
  }
`;

const StyledIcon = styled(BsChevronCompactUp)`
  stroke: white;
  stroke-width: 0.5;
  font-size: 2rem;
  font-weight: 800;
  width: 100%;
  height: 100%;
`;
