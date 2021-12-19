import styled from "styled-components";

export const BlogPostsGridWrapper = styled.div`
  min-height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: calc(var(--global-padding) / 2) var(--global-padding);
`;

export const BlogPost = styled.div<{ variant?: "primary" | "secondary" }>`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  height: 540px;
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    background-color: var(--primary);
    color: var(--secondary);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 50%;

  img {
    object-fit: cover;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0 3rem;
  text-align: center;
`;

export const Date = styled.span`
  color: var(--secondary);
  width: 30%;
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  height: 50%;
`;
