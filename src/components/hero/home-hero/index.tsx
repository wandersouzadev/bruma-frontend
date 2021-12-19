import * as Styled from "./styles";
import Link from "next/link";

export const HomeHero: React.FC = () => {
  return (
    <Styled.HeroWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>Olá, eu sou a Bruma.</Styled.Title>
        <Styled.Description>Como posso te ajudar?</Styled.Description>
      </Styled.TitleWrapper>
      <Styled.LinkWrapper>
        <Link href="/jornalistico" passHref>
          <a>
            <Styled.Text>Texto Jornalístico</Styled.Text>
          </a>
        </Link>
        <Link href="/publicitario" passHref>
          <a>
            <Styled.Text>Texto Publicitário</Styled.Text>
          </a>
        </Link>
      </Styled.LinkWrapper>
    </Styled.HeroWrapper>
  );
};
