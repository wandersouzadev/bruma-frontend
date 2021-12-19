import * as Styled from "../default/styles";
import { Header } from "../../header";
import { ContactFooter } from "../../footer-contact";

export const ContactLayout: React.FC = ({ children }) => {
  return (
    <Styled.Layout>
      <Header />
      <Styled.Content>{children}</Styled.Content>
      <ContactFooter />
    </Styled.Layout>
  );
};
