import styled from 'styled-components';
import Layout from '../components/Layout';
import CapitalFactory from '../components/Links/CapitalFactory';

const Main = styled.main`
  p {
    width: 70%;
  }
`;

export default function LinksPage() {
  return (
    <Layout>
      <Main>
        <h1>Links</h1>
        <CapitalFactory />
      </Main>
    </Layout>
  );
}
