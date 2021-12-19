import styled from "styled-components";
import { BasePage } from "../../../styles/global-styles";

export const Wrapper = styled.main`
  ${BasePage}
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -50%;
    width: 80%;
    height: 100%;
    background-image: url("/img/female-hands-press-laptop-keys-while-sitting-at-wooden-table-with-white-cappuccino-cup.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: invert(0) sepia(94%) saturate(320%) hue-rotate(108deg)
      brightness(96%) contrast(86%);
  }
`;

export const Content = styled.div`
  min-height: 100vh;
  position: relative;
  padding-left: 5%;
  padding-right: 30%;
  overflow: hidden;
  font-size: 23px;
`;

export const Text = styled.div`
  font-size: 2rem;
  padding-right: 35%;
`;
