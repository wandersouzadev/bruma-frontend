import styled from "styled-components";

export const Top = styled.div`
  position: relative;
  height: 70%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

export const Bottom = styled.span`
  height: max-content;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 1rem;
`;

export const AnimatedBG = styled.span`
  color: white;
  visibility: hidden;
  font-weight: bold;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  font-size: 1.2rem;
`;
export const Card = styled.div`
  position: relative;
  transition: transform 0.2s;
  height: 415px;
  width: 406px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);

    ${AnimatedBG} {
      visibility: visible;
    }

    ${Top} {
      background-color: var(--secondary);

      img {
        opacity: 0.4;
      }
    }
  }
`;
