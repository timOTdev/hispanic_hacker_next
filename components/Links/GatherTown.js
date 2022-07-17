import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  h2 {
    text-align: left;
  }
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.linkUnderline};
  }
`;
export default function GatherTown() {
  return (
    <Section>
      <h2>GatherTown</h2>
      <hr />
      <p>Visit our virtual gathering hub for events!</p>
      <a
        href='https://app.gather.town/invite?token=3AhQ8rrZA24acNgFk6qU6UkZD-70iOcu
'
      >
        <p>Click to visit our town</p>
      </a>
      <Image
        src='/static/images/gatherTown.png'
        alt='GatherTown Hub'
        width={1280}
        height={713}
      />
    </Section>
  );
}
