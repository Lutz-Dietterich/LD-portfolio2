import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../../../utils/data/sliderData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <>
      <StyledSwiper
        slidesPerView={"1"}
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {sliderData.map((item) => (
          <StyledSwiperSlide key={item.id}>
            <StyledImage
              className="img"
              src={item.imageUrl}
              alt={item.title}
              width={1440}
              height={900}
            />
            {sliderData[currentIndex].link && (
              <StyledLink href={sliderData[currentIndex].link} target="blank">
                {sliderData[currentIndex].linkText}
              </StyledLink>
            )}
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
}

const StyledSwiper = styled(Swiper)`
  width: 60%;
  height: 70%;

  .swiper-button-prev {
    color: var(--color-text);
    font-size: 2rem;

    &:hover {
      scale: 1.1;
    }
  }

  .swiper-button-next {
    color: var(--color-text);
    font-size: 2rem;

    &:hover {
      scale: 1.1;
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 85%;
  height: 90%;
  object-fit: fill;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 8px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 10%;
  left: 20%;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
`;
