import { ArrowDown } from "../../common/arrow-down";
import * as Styled from "./styles";

export const AboutHero: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>Oi, que bom ver você por aqui!</Styled.Title>
        <Styled.Description>
          Nulla quis ultricies nunc. Nunc lobortis, neque vel volutpat
          fringilla, magna velit blandit tellus, ut egestas ante erat quis dui.
          Ut faucibus pulvinar sollicitudin. Proin non ju.
        </Styled.Description>
        <ArrowDown />
      </Styled.TitleWrapper>
    </Styled.Wrapper>
  );
};
