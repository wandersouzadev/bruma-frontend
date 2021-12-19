import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: absolute;
  margin-left: var(--global-padding);
  height: 222px;
  width: 222px;
  border-radius: 50%;
  top: 1px;
  overflow: hidden;
`;

export const Text = styled.span`
  width: 50%;
  font-size: 1.9rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;

  &:before,
  &:after {
    content: '"';
    font-weight: bold;
  }
`;

export const Author = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  font-weight: bold;
  margin: auto;
  width: 50%;
`;

export const Content = styled.div`
  display: flex;
  padding: var(--global-padding);
  background-color: #f3f3f3;
`;
