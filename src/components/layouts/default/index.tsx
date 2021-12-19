import * as Styled from "./styles";
import { Footer } from "../../footer";
import { Header } from "../../header";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Styled.Layout>
      <Header />
      <Styled.Content>{children}</Styled.Content>
      <Footer />
    </Styled.Layout>
  );
};
