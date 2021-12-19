import * as Styled from "./styles";

export const PostContent: React.FC = () => {
  return (
    <Styled.PostContentWrapper>
      <Styled.TitleWrapper>
        <Styled.Title></Styled.Title>
        <Styled.Description></Styled.Description>
      </Styled.TitleWrapper>
      <Styled.Content></Styled.Content>
    </Styled.PostContentWrapper>
  );
};
