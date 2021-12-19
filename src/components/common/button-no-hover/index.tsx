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

export interface ButtonHoverProps
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

export const ButtonNoHover: React.FC<ButtonHoverProps> = ({
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
    <Styled.ButtonHover
      onClick={() => onClick()}
      p={padding || 3}
      variant={variant}
      alignSelf={alignSelf || "start"}
      justifySelf={justifySelf || "start"}
      mx={mx || 0}
      fontSize={fontSize || 4}
    >
      {children}
    </Styled.ButtonHover>
  );
};
