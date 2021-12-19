import * as Styled from "./styles";
import { ContactHero } from "../../hero/contact-hero";
import { Form } from "../../form";
import { Social, SocialData } from "../../social";

export type ContactTemplateProps = {
  social: SocialData;
};

export const ContactTemplate: React.FC<ContactTemplateProps> = ({ social }) => {
  return (
    <Styled.Wrapper>
      <ContactHero />
      <Form />
      {social && <Social social={social} />}
    </Styled.Wrapper>
  );
};
