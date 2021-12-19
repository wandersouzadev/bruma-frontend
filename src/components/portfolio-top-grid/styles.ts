import styled from "styled-components";

export const PortfolioHighGridWrapper = styled.div`
  min-height: 50vh;
  max-height: 100%;
  display: flex;
  color: #fff;
`;

export const LatestPortfolio = styled.div`
  background-color: var(--primary);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--global-padding);
  gap: 2rem;
  position: relative;
`;

export const Post = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
  width: 50%;
  a:nth-child(even) ${Post} {
    flex-direction: row-reverse;
  }
`;

export const TitleWrapper = styled.div`
  width: 50%;
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

export const ImageWrapper = styled.div`
  opacity: 0.1;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  width: 50%;
  background-color: var(--secondary);
  color: var(--primary);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Title}, ${Description} {
    font-size: 1.5rem;
    width: 70%;
  }
`;

export const Thumbnail = styled.div`
  width: 50%;
  position: relative;

  img {
    object-fit: cover;
  }
`;
