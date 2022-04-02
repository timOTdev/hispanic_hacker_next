import { createGlobalStyle } from 'styled-components';

// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// @media (min-width: 320px) {}
// @media (min-width: 375px) {}
// @media (min-width: 425px) {}
// @media (min-width: 768px) {}
// @media (min-width: 1024px) {}
// @media (min-width: 1440px) {}
// @media (min-width: 2560px) {}

export const themeColors = {};

export const darkTheme = {};

export const lightTheme = {};

export const GlobalStyles = createGlobalStyle`
  html {
    --grey: #3A3A3A;
    --gray: var(--grey);
    --pageHeaderColor: #1c1f21;
    --pageContentColor: #252525;
    --pageFontColor: #eeeeee;
    --maxWidth: 1000px;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    color: var(--pageFontColor);
    line-height:2;
    background: var(--pageContentColor);
  }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 2rem; }
  a {
    color: var(---grey);
  }
  a:hover {
    text-decoration: underline;
  }
`;
