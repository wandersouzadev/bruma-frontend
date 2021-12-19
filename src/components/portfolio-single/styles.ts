import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 50vh;
  padding: 0 var(--global-padding);
  display: grid;
  grid-template-columns: 60% 40%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`;

export const Description = Title;
