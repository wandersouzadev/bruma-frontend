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

  .swiper-pagination {
    height: 25px;
    &::before {
      content: "";
      border-top: solid 1px var(--secondary);
      display: block;
      height: fit-content;
      width: 100%;
      position: absolute;
      top: 50%;
    }

    .swiper-pagination-bullet {
      height: 25px;
      width: 25px;
      background-color: var(--secondary);
      border-radius: 50%;
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: solid 2px var(--secondary);

      &:nth-child(even) {
        background-color: red;
      }
      &:nth-child(odd) {
        background-color: black;
      }

      .swiper-pagination-bullet-active-next {
        background-color: yellow;
      }
    }

    /* .swiper-pagination span:nth-child(1) {
      background-color: yellow;
      margin-left: 1px;
    }

    span:nth-child(2) {
      background-color: white;
      transform: scale(1.5);
      margin-left: 10%;
    }
    span:nth-child(3) {
      background-color: red;
      margin-left: 75%;
    }
    span:nth-child(4) {
      background-color: violet;
      margin-left: 80%;
    } */

    .swiper-pagination-bullet {
    }

    /* change color of next 2 bullets in sequence to white*/

    .swiper-pagination-bullet-active-next,
    .swiper-pagination-bullet-active-next-next {
      background-color: white;
    }

    /* change color of previous bullet to white*/

    .swiper-pagination-bullet-active-prev {
      background-color: white;
    }
  }
`;
