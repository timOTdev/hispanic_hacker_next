import styled from 'styled-components';
import Layout from '../components/Layout';
import Intro from '../components/Home/Intro';
import Mission from '../components/Home/Mission';

const Main = styled.main`
  margin: 1.5rem auto;
`;

export default function IndexPage() {
  return (
    <Layout>
      <Main>
        <Intro />
        <Mission />
      </Main>
    </Layout>
  );
}
