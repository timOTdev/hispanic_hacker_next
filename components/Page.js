import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Layout/Footer';

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
