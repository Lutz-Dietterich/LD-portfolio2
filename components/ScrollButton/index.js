import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const triggerPosition = 2400; // Die Scrollposition, ab der der Button erscheinen soll

      if (scrollPosition > triggerPosition) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("showButton", showButton);

  return (
    <ScrollButtonContainer showButton={showButton}>
      <StyledLink href="#" target="blank">
        {" "}
        dass ich der Richtige bin
      </StyledLink>
    </ScrollButtonContainer>
  );
}

const ScrollButtonContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 3000;
  transition: opacity 0.3s ease-in-out, left 0.6s ease-in-out;
  width: 100%;
  display: flex;
  background-color: var(--color-primary);
  opacity: ${(props) => (props.showButton ? "1" : "0")};
  visibility: ${(props) => (props.showButton ? "visible" : "hidden")};
  left: ${(props) => (props.showButton ? "50%" : "-1000px")};
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 10%;
  // left: 20%;
  // margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: var(--color-button);
  color: var(--color-primary);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

  @media (max-width: 768px) {
    bottom: -5%;
    left: 5%;
  }

`;
