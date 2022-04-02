import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Section = styled.section`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 2560px) {
    width: 80%;
  }
`;

export default function Layout(props) {
  return (
    <>
      <Header {...props} />
      <Section>{props.children}</Section>
      <Footer />
    </>
  );
}
