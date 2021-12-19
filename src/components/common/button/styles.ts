import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
  LayoutProps,
  PositionProps,
  ColorProps,
  FlexboxProps,
  BordersProps,
  SpaceProps,
  ShadowProps,
  TypographyProps,
  shadow,
  variant,
} from "styled-system";
import { cssVars } from "../../../styles/global-styles";

interface Props
  extends LayoutProps,
    ShadowProps,
    TypographyProps,
    PositionProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BordersProps,
    SpaceProps {
  variant: "primary" | "secondary";
}

export const Button = styled.button<Props>`
  cursor: pointer;
  display: flex;
  position: relative;
  line-height: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  border: none;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    right: -8px;
    bottom: -8px;
    width: 100%;
    height: 100%;
    border: solid 1px;
    border-color: ${(props) =>
      `var(--${props.variant === "primary" ? "secondary" : "primary"})`};
  }
  &:hover {
    &::before {
      border-color: ${(props) => `var(--${props.variant})`};
    }
  }

  ${variant({
    variants: {
      primary: {
        color: "white",
        bg: cssVars.primary,
        "&:hover": {
          bg: cssVars.secondary,
        },
      },
      secondary: {
        color: cssVars.primary,
        bg: cssVars.secondary,
        "&:hover": {
          color: cssVars.secondary,
          bg: cssVars.primary,
        },
      },
    },
  })}
  ${compose(
    border,
    space,
    layout,
    typography,
    color,
    position,
    flexbox,
    shadow
  )}
`;
