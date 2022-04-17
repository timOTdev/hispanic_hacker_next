import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Date from '../../assets/date';

const Section = styled.section`
  text-align: center;
  h2 {
    text-align: left;
  }
  ul {
    list-style-type: none;
    margin: 5rem auto;
    text-align: left;
    p {
      display: inline;
    }
    a {
      text-decoration: none;
      border-bottom: 2px solid ${({ theme }) => theme.underlineColor};
    }
  }
`;

export default function Blog({ allPostsData }) {
  return (
    <Section id='blog'>
      <h2>Blog</h2>
      <hr />
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <p>
              <Date dateString={date} />
            </p>{' '}
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src='/static/images/hhatx.png'
        alt='Hispanic Hacker Collage'
        width={800}
        height={533}
      />
    </Section>
  );
}
