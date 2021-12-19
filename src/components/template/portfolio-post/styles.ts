import styled from "styled-components";

export const BlogPostWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 60px;
  margin-left: var(--global-padding);
`;

export const Description = styled.span`
  font-size: 60px;
  margin-left: var(--global-padding);
`;

export const Content = styled.div`
  padding: var(--global-padding);
`;
