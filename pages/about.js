import styled from 'styled-components';
import Layout from '../components/Layout';
import Team from '../components/About/Team';
import Recruiting from '../components/About/Recruiting';

const Main = styled.main`
  font-size: 2.4rem;
  img {
    display: flex;
    justify-content: center;
  }
`;

export default function AboutPage() {
  return (
    <Layout>
      <Main>
        <Team />
        <Recruiting />
      </Main>
    </Layout>
  );
}
