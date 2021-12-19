import styled from "styled-components";

export const PortfolioGridWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--global-padding) 0;
  gap: var(--global-padding) 0;
`;

export const Portfolio = styled.div`
  height: 540px;
  width: 605px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
  gap: calc(var(--global-padding) / 2);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
`;

export const Description = styled.span`
  font-weight: 300;
  font-size: 28px;
`;

export const Link = styled.a`
  z-index: 100;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  height: 10%;
  color: var(--primary);
  font-weight: bold;
  display: flex;
  flex-direction: column;

  ${Title}, ${Description} {
    font-size: 1.5rem;
    width: 70%;
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

export const Category = styled.span`
  position: absolute;
  bottom: 2vh;
  background-color: white;
  color: var(--primary);
  font-weight: 700;
  padding: 0.5rem 1rem;
`;
