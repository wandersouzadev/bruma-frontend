import * as Styled from "./styles";
import Image from "next/image";
import { ArrowButton } from "../../common/arrow-button";

export type JournalisticPublicityHeroProps = {
  title: string;
};

export const JournalisticPublicityHero: React.FC<JournalisticPublicityHeroProps> =
  ({ title }) => {
    return (
      <Styled.Wrapper>
        <ArrowButton />
        <Styled.Title>{title}</Styled.Title>
      </Styled.Wrapper>
    );
  };
