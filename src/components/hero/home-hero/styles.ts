import styled from "styled-components";

export const HeroWrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  padding-left: var(--global-padding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--global-padding);
  background: url("/img/bruma-banner.png") no-repeat bottom right;
  background-size: 600px;
  position: relative;
  overflow: hidden;
  background-color: #f3f3f3;
`;

export const TitleWrapper = styled.div``;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--global-padding) / 2);
  width: 50%;
`;

export const Title = styled.h1`
  color: var(--primary);
  font-size: 63px;
  font-weight: 800;
`;

export const Description = styled.span`
  font-family: "SamsungOne";
  font-weight: 300;
  font-size: 25px;
  color: #bab9bd;
`;

export const Text = styled.h3`
  font-size: 36px;
  font-family: "SamsungOne";
  font-weight: 400;
  color: #898989;
  padding: 1rem;
  transition: transform linear 0.2s;
  &:hover {
    color: #fff;
    background: linear-gradient(
      90deg,
      var(--secondary) 0%,
      #38c5a9 49%,
      var(--secondary) 100%
    );
    transform: translateX(-2rem);
  }
`;
