import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  width: 75px;
  height: 75px;
  color: white;
  z-index: 100;
  transition: 0.2s transform;

  &:hover {
    color: var(--secondary);
    transform: translateX(-20px);
  }
`;
