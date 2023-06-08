import React, { useState } from "react";
import styled from "styled-components";

const data = [
  {
    id: 1,
    title: "Bild 1",
    imageUrl:
      "https://res.cloudinary.com/dnojoo4vt/image/upload/v1685634486/samples/animals/kitten-playing.gif",
  },
  {
    id: 2,
    title: "Bild 2",
    imageUrl:
      "https://res.cloudinary.com/dnojoo4vt/image/upload/v1685634485/samples/landscapes/nature-mountains.jpg",
  },
  {
    id: 3,
    title: "Bild 3",
    imageUrl:
      "https://res.cloudinary.com/dnojoo4vt/image/upload/v1685634480/samples/people/bicycle.jpg",
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderContainer>
      <SliderArrow onClick={goToPreviousSlide}>{"<"}</SliderArrow>
      <Slide>
        <SlideTitle>{data[currentIndex].title}</SlideTitle>
        <SlideImage
          src={data[currentIndex].imageUrl}
          alt={data[currentIndex].title}
        />
      </Slide>
      <SliderArrow onClick={goToNextSlide}>{">"}</SliderArrow>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
`;

const SlideImage = styled.img`
  width: 800px;
  height: 500px;
  object-fit: cover;
`;

const SlideTitle = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  color: #333;
`;

const SliderArrow = styled.div`
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  &:first-child {
    left: 20px;
  }

  &:last-child {
    right: 20px;
  }
`;
