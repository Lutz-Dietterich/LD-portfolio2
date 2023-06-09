import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { sliderData } from "../../../utils/data/sliderData";

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleLinkHover = (hovered) => {
    setIsHovered(hovered);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderContainer
      onMouseEnter={() => handleLinkHover(true)}
      onMouseLeave={() => handleLinkHover(false)}
    >
      <SliderArrow onClick={goToPreviousSlide}>
        <BsChevronLeft />
      </SliderArrow>
      <SlideImageContainer currentIndex={currentIndex}>
        {sliderData.map((item, index) => (
          <SlideImage
            width={900}
            height={600}
            key={item.id}
            src={item.imageUrl}
            alt={item.title}
            active={index === currentIndex}
            link={item.link}
            linkText={item.linkText}
          />
        ))}
        {data[currentIndex].link && (
          <StyledLink href={sliderData[currentIndex].link} target="blank">
            {sliderData[currentIndex].linkText}
          </StyledLink>
        )}
      </SlideImageContainer>
      <SliderArrow onClick={goToNextSlide}>
        <BsChevronRight />
      </SliderArrow>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;
  width: 53vw;
  height: 500px;
  background-color: var(--color-primary);
`;

const SlideImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideImage = styled.img`
  position: absolute;
  display: flex;
  width: 50vw;
  height: 32vw;

  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? 1 : 0)};

  transition: opacity 0.5s ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 10%;
  left: 30%;
  padding: 1rem 2rem;
  z-index: 1000;
  text-decoration: none;
  color: inherit;
  font-size: 2rem;

  border-radius: 10px;
  background-color: white;

  &:hover {
    background-color: var(--color-button);
    color: #fff;
    font-weight: bold;
    text-shadow: 20px 2px 10px 2px rgba(0, 0, 0, 1);
  }
`;

const SliderArrow = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: var(--color-button);
    font-weight: bold;
    color: #fff;
    text-shadow: 20px 2px 10px 2px rgba(0, 0, 0, 1);
  }
`;
