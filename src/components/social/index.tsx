import * as Styled from "./styles";
import Image from "next/image";

export type SocialData = {
  facebook: {
    text: string;
    url: string;
  };
  instagram: {
    text: string;
    url: string;
  };
  linkedin: {
    text: string;
    url: string;
  };
  medium: {
    text: string;
    url: string;
  };
  whatsapp: {
    text: string;
    url: string;
  };
  email: {
    text: string;
    url: string;
  };
};

export type SocialProps = {
  social: any;
};

export const Social: React.FC<SocialProps> = ({ social }) => {
  return (
    <Styled.ContactSocial>
      <Styled.Title>
        Se preferir, pode me chamar também em outros canais ;)
      </Styled.Title>

      <Styled.SocialContainer>
        {Object.keys(social).map((s) => (
          <Styled.Social key={s}>
            <Image
              src={"/icon/" + s + ".svg"}
              alt={s + " logo"}
              width={26}
              height={26}
            />
            <Styled.Text>{social[s].text}</Styled.Text>
          </Styled.Social>
        ))}
      </Styled.SocialContainer>
    </Styled.ContactSocial>
  );
};
