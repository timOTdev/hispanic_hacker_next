import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Section = styled.section`
  width: 90%;
  margin: 2rem auto;
`;

export default function Layout(props) {
  return (
    <main>
      <Header {...props} />
      <Section>{props.children}</Section>
      <Footer />
    </main>
  );
}
