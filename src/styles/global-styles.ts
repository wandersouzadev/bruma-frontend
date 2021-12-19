import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "SamsungOne";
    src: url("/fonts/samsung-one/samsung-one-400.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "SamsungOne";
    src: url("/fonts/samsung-one/samsung-one-700.ttf");
    font-style: medium;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Eskorte";
    src: url("/fonts/eskorte/eskorte-latin-semibold.ttf");
    font-style: medium;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: "NanumGothic";
    src: url("/fonts/nanum-gothic/nanum-gothic-regular.ttf");
    font-style: medium;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "NanumGothic";
    src: url("/fonts/nanum-gothic/nanum-gothic-bold.ttf");
    font-style: medium;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "NanumGothic";
    src: url("/fonts/nanum-gothic/nanum-gothic-extra-bold.ttf");
    font-style: medium;
    font-weight: 800;
    font-display: swap;
  }
  :root {
      --primary: #4d3774;
      --secondary: #45e5c6;
      --light: "#fff";
      --dark: "#000";
      --header-height: 158px;
      --footer-height: 298px;
      --global-padding: 128px;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-family: 'NanumGothic', sans-serif;
      color: var(--primary);   
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  img {
      max-width: 100%;
  }
`;

export const BasePage = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const cssVars = {
  primary: "#4d3774",
  secondary: "#45e5c6",
  white: "#fff",
  gray: "#f5f5f5",
  headerHeight: "158px",
  footerHeight: "298px",
  globalPadding: "128px",
};
