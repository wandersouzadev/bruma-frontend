import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  background: url("/img/bruma-banner.png") no-repeat bottom right;
  background-size: 50%;
  background-repeat: no-repeat;
  padding-top: var(--global-padding);
  position: relative;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  gap: 2rem;
  width: 50%;
  padding: 0 var(--global-padding);
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
`;

export const Description = styled.span`
  font-size: 1.8rem;
`;
