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
  flex-direction: column;
  gap: 3rem;
  text-align: "none";

  h3 {
    margin: "none";
  }

  span {
    display: "block";
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;
`;
export const SubTitle = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
`;
export const Contact = SubTitle;
