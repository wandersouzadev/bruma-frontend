import * as Styled from "./styles";
import { CommonButton } from "../common/button";

export const Form: React.FC = () => {
  return (
    <Styled.ContactForm>
      <Styled.Form>
        <Styled.Title>Deixe sua mensagem aqui!</Styled.Title>
        <input type="text" name="name" id="name" placeholder="Nome" />
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          cols={30}
          rows={10}
        ></textarea>

        <CommonButton
          variant="secondary"
          alignSelf="flex-end"
          fontSize={6}
          padding={4}
        >
          Enviar!
        </CommonButton>
      </Styled.Form>
    </Styled.ContactForm>
  );
};
