import styled from "styled-components";

export const ContactSocial = styled.div`
  padding: var(--global-padding);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
`;

export const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

export const Social = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    filter: invert(24%) sepia(9%) saturate(3700%) hue-rotate(220deg)
      brightness(93%) contrast(90%);
  }
`;

export const Text = styled.span`
  font-size: 1.8rem;
`;
