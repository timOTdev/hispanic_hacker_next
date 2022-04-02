import styled from 'styled-components';
import Layout from '../components/Layout';
import Intro from '../components/Events/Intro';
import Events from '../components/Events/Events';

const Main = styled.main`
  text-align: center;
  a {
    text-decoration: underline;
  }
  span {
    font-size: 20rem;
  }
`;

export default function EventsPage() {
  return (
    <Layout>
      <Main>
        <Intro />
        <Events />
      </Main>
    </Layout>
  );
}
