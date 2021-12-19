import styled from "styled-components";

export const BlogPostsWrapper = styled.div`
  color: var(--primary);
  display: flex;
  position: relative;
  flex-direction: column;
  gap: var(--global-padding);
  padding-bottom: var(--global-padding);
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 58px;
  margin-left: var(--global-padding);
`;

export const DataWrapper = styled.div`
  display: flex;
  height: 50%;
  transition: all 0.2s;
`;

export const AnimatedLink = styled.span`
  display: none;
  font-weight: 600;
  font-size: 1.5rem;
  transition: translate 0.2s;
`;

export const CardTitle = styled.h3`
  width: 50%;
  font-size: 1.4rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  margin: auto;
  padding: 1rem;
  overflow-wrap: break-word;
  transition: all 0.2s;
`;

export const Card = styled.a`
  height: 415px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  background-color: var(--primary);
  transition: all 0.2s;

  &:hover {
    color: var(--primary);
    background-color: var(--secondary);
  }

  &:hover ${DataWrapper} {
    color: var(--primary);
    transform: translateY(-1rem);
  }
  &:hover ${AnimatedLink} {
    display: block;
  }

  &:hover ${Title} {
    transform: translateY(-1rem);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 50%;
  img {
    object-fit: cover;
  }
`;

export const Date = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 3rem;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.3s;
`;
