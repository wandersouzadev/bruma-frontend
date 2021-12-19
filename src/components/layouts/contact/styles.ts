import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    ". ."
    "menu content"
    "menu footer";
  grid-template-columns: minmax(258px, 20vw) 1fr;
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  min-height: 100%;
  max-width: 90vw;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 70vw;
`;
