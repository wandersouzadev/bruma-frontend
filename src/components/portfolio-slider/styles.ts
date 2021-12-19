import styled from "styled-components";
import { lighten } from "polished";
import { cssVars } from "../../styles/global-styles";

type Variant = "primary" | "secondary" | "light" | "dark";

export const TitleWrapper = styled.div``;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
`;

export const Description = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 80%;
  img {
    object-fit: cover;
  }
`;

export const Bottom = styled.span`
  height: 20%;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
`;

export const AnimatedBG = styled.span`
  color: #fff;
  visibility: hidden;
  font-weight: bold;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
export const Card = styled.a`
  position: relative;
  height: 415px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  padding: 1rem;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);

    ${AnimatedBG} {
      visibility: visible;
    }
    ${ImageWrapper} {
      background-color: var(--secondary);
      img {
        opacity: 0.4;
      }
    }
  }
`;

export const Wrapper = styled.div<{ variant: Variant }>`
  display: flex;
  flex-direction: column;
  gap: var(--global-padding);
  padding: var(--global-padding);
  padding-right: 0;
  color: ${(props) => getVariant(props.variant).color};
  background-color: ${(props) => getVariant(props.variant).bg};

  ${Description}, ${Bottom} {
    color: ${(props) =>
      props.variant === "dark"
        ? lighten(0.4, getVariant(props.variant).color)
        : getVariant(props.variant).color};
  }
`;

//
function getVariant(variant: Variant = "primary") {
  const variants = {
    primary: {
      color: cssVars.white,
      bg: cssVars.primary,
    },
    secondary: {
      color: cssVars.primary,
      bg: cssVars.secondary,
    },
    light: {
      color: cssVars.primary,
      bg: cssVars.gray,
    },
    dark: {
      color: cssVars.secondary,
      bg: cssVars.primary,
    },
  };
  return variants[variant];
}
