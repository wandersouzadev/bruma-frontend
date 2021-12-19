import styled from "styled-components";

export const Footer = styled.footer`
  grid-area: footer;
  background-color: var(--secondary);
  color: var(--primary);
  min-height: 50vh;
  background-image: url("/img/footer-dot.png");
  background-repeat: no-repeat;
  background-size: 6rem;
  background-position: 88%;
  padding: var(--global-padding);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: "Eskorte", serif;
  font-weight: 600;
  font-size: 3rem;
`;
