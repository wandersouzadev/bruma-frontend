import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--global-padding);
  padding: var(--global-padding);
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 800;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 120px;
  width: 120px;

  img {
    object-fit: cover;
  }
`;

export const Text = styled.div`
  color: gray;
  font-size: 34px;
`;
