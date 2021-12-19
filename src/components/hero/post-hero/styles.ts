import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(80vh - var(--header-height));
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 var(--global-padding);
  img {
    z-index: -1;
    object-fit: cover;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 62px;
  font-weight: 600;
  word-break: break-all;
`;

export const Description = styled.h2`
  font-size: 42px;
  font-weight: 400;
`;

export const Date = styled.span`
  font-size: 22px;
  color: #f0f0f0;
`;
