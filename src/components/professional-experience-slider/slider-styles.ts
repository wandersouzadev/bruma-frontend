import styled from "styled-components";

// export const AboutExperienceSkills = styled.div`
//   min-height: 100vh;
//   background-color: #f3f3f3;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// export const Title = styled.h2`
//   font-size: 4rem;
//   font-weight: 600;
//   padding-left: var(--global-padding);
// `;

export const Experience = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ExperienceTitleWrapper = styled.div`
  display: flex;
  gap: 0 1rem;
  width: 100%;
  height: fit-content;
  font-size: 3.5rem;
  font-weight: 600;
`;

export const ExperienceDate = styled.span`
  color: var(--secondary);
`;

export const ExperienceTitle = styled.span``;

export const ExperienceRole = styled.span`
  height: fit-content;
  font-size: 2.8rem;
  font-weight: 600;
`;

export const ExperienceContent = styled.span`
  height: fit-content;
  font-size: 2.2rem;
`;

export const Skill = styled.div`
  display: flex;
  justify-self: center;
  padding: 0 var(--global-padding);
`;

export const SkillTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
`;

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;

export const SkillText = styled.span``;
