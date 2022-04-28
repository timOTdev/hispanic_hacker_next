import styled from 'styled-components';
import Image from 'next/image';
import CapitalFactorySocials from './CapitalFactorySocials';

const Section = styled.section`
  h2 {
    text-align: left;
  }
`;
const Div = styled.div`
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1440px) {
    width: 60%;
  }
`;

export default function CapitalFactory() {
  return (
    <Section>
      <h2>Capital Factory</h2>
      <hr />
      <Div>
        <Image
          src='/static/images/capital_factory.png'
          alt='Capital Factory Logo'
          width={250}
          height={250}
        />
        <p>Capital Factory</p>
        <p>701 Brazos St, Austin, TX 78701</p>
        <CapitalFactorySocials />
        <span>
          <h2>Mission</h2>
          <p>
            Our mission? To be the center of gravity for entrepreneurship in
            Texas. Unofficially? Convince you to quit your job and become an
            entrepreneur.
          </p>
          <p>
            Capital Factory’s mission is to be the center of gravity for
            entrepreneurs in Texas, the number one startup state in the U.S.
            Thousands of entrepreneurs, programmers and designers gather day and
            night, in-person and online for meetups, classes and coworking. With
            boots on the ground in Austin, Dallas and Houston, we meet the best
            entrepreneurs in Texas and introduce them to their first investors,
            employees, mentors and customers. According to Pitchbook, Capital
            Factory has been the most active investor in Texas since 2010.
          </p>
        </span>
      </Div>
    </Section>
  );
}
