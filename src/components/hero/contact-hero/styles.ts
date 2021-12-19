import styled from "styled-components";

export const HeroWrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 var(--global-padding);
`;
export const ImageWrapper = styled.div`
  position: relative;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem 0;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 4.2rem;
`;

export const Description = styled(Title)`
  font-weight: 400;
`;
