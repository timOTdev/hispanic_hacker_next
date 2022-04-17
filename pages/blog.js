import Layout from '../components/Layout';
import Blog from '../components/Blog/';
import { getSortedPostsData } from '../assets/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogPage(props) {
  return (
    <Layout {...props}>
      <Blog allPostsData={props.allPostsData} />
    </Layout>
  );
}
