import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
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

const Section = styled.section``;
const ChildrenWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	flex: 1;
`;

export default function Page({ children }) {
	return (
		<Section>
			<GlobalStyles />
			<Header />
			<ChildrenWrapper>{children}</ChildrenWrapper>
			<Footer />
		</Section>
	);
}

Page.propTypes = {
	cool: PropTypes.string,
	children: PropTypes.any,
};
