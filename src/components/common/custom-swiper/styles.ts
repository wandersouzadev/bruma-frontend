import styled from "styled-components";

const StyledFilter = {
  primary:
    "invert(24%) sepia(9%) saturate(3700%) hue-rotate(220deg) brightness(93%) contrast(90%)",
  secondary:
    "invert(73%) sepia(35%) saturate(660%) hue-rotate(117deg) brightness(97%) contrast(98%);",
  white:
    "invert(100%) sepia(100%) saturate(0%) hue-rotate(112deg) brightness(104%) contrast(103%);",
};

export const SwiperWrapper = styled.div<{
  variant?: "primary" | "secondary" | "white";
}>`
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-button-next {
    background-image: url("/icon/arrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: -80%;
    width: fit-content;
    height: fit-content;
    margin: auto;
    z-index: 999;
    height: 150px;
    width: 150px;
    filter: ${({ variant }) => StyledFilter[variant || "white"]};
    transition: transform linear 0.2s;
    &:hover {
      transform: translateX(0.5rem);
    }
  }

  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev {
    display: none;
  }
`;
