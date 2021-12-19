import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--global-padding);
  gap: var(--global-padding);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background-image: url("/img/vintage-typewriter-on-wooden-table.png");
    background-size: cover;
    filter: grayscale(1);
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background-image: url("/icon/dot.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 80%;
  }
`;

export const Title = styled.h2`
  font-weight: 800;
  color: var(--primary);
  font-size: 4.5rem;
  max-width: min-content;
`;
