import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  img {
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
`;

export const Wrapper = styled.div`
  height: calc(100vh - var(--header-height));
  display: flex;
`;

export const TitleWrapper = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  overflow-wrap: break-word;

  svg {
    margin-top: 50px;
    height: 120px;
  }
`;
