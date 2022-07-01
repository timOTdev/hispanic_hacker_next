import Layout from '../components/Layout';
import Team from '../components/About/Team';
import Recruiting from '../components/About/Recruiting';

export default function AboutPage(props) {
  return (
    <Layout {...props}>
      <Team />
      <Recruiting />
    </Layout>
  );
}
