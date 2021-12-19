import * as Styled from "./styles";
import Image from "next/image";

export const ContactHero: React.FC = () => {
  return (
    <Styled.HeroWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>Fique à vontade para me chamar.</Styled.Title>
        <Styled.Description>
          Vou adorar conversar <br /> com você! :)
        </Styled.Description>
      </Styled.TitleWrapper>
      <Styled.ImageWrapper>
        <Image
          src="/img/smiling-charming-brunette-asian-woman-uses-mobile-phone-happy-texting-in-social-networks-addicted-to-modern-technologies-wears-casual-jumper.png"
          alt=""
          layout="fill"
        />
      </Styled.ImageWrapper>
    </Styled.HeroWrapper>
  );
};
