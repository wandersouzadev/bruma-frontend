import * as Styled from "./styles";
import {
  LayoutProps,
  ShadowProps,
  TypographyProps,
  PositionProps,
  ColorProps,
  FlexboxProps,
  BordersProps,
  SpaceProps,
} from "styled-system";

export interface ButtonProps
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
  onClick?: Function;
}

export const CommonButton: React.FC<ButtonProps> = ({
  children,
  fontSize,
  padding,
  variant,
  mx,
  justifySelf,
  alignSelf,
  onClick = () => null,
}) => {
  return (
    <Styled.Button
      onClick={() => onClick()}
      p={padding || 3}
      variant={variant}
      alignSelf={alignSelf || "start"}
      justifySelf={justifySelf || "start"}
      mx={mx || 0}
      fontSize={fontSize || 4}
    >
      {children}
    </Styled.Button>
  );
};
