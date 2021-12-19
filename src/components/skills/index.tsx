import * as Styled from "./styles";
import Image from "next/image";

export const Skills: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.SkillTitle>Skills:</Styled.SkillTitle>
      <Styled.SkillContent>
        <Image src="/icon/skill-1.svg" alt="" width={56} height={56} />
        <Styled.SkillText>Nulla quis.</Styled.SkillText>
      </Styled.SkillContent>
      <Styled.SkillContent>
        <Image src="/icon/skill-2.svg" alt="" width={56} height={56} />
        <Styled.SkillText>Nulla quis.</Styled.SkillText>
      </Styled.SkillContent>
      <Styled.SkillContent>
        <Image src="/icon/skill-3.svg" alt="" width={56} height={56} />
        <Styled.SkillText>Nulla quis.</Styled.SkillText>
      </Styled.SkillContent>
      <Styled.SkillContent>
        <Image src="/icon/skill-4.svg" alt="" width={56} height={56} />
        <Styled.SkillText>Nulla quis.</Styled.SkillText>
      </Styled.SkillContent>
    </Styled.Wrapper>
  );
};
