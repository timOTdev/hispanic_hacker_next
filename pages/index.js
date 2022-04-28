import Layout from '../components/Layout';
import Intro from '../components/Home/Intro';
import Mission from '../components/Home/Mission';
import ContactButton from '../components/lib/ContactButton';

export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Intro />
      <Mission />
      <ContactButton />
    </Layout>
  );
}
