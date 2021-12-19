import * as Styled from "./styles";
import Image from "next/image";
import { ArrowDown } from "../../common/arrow-down";

export const PortfolioHero: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.ImageContainer>
        <Image src="/img/portfolio-banner.png" alt="bruma hero" layout="fill" />
      </Styled.ImageContainer>
      <Styled.TitleWrapper>
        <Styled.Title>Bora conhecer melhor meu trabalho?</Styled.Title>
        <ArrowDown />
      </Styled.TitleWrapper>
    </Styled.Wrapper>
  );
};
