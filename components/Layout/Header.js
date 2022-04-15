import styled from 'styled-components';
import Image from 'next/image';
import SocialsHH from './SocialsHH';
import Menus from './Menus';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.backgroundContrast};
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  padding: 1rem 0 1rem 0;
  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export default function Header(props) {
  return (
    <Section>
      <div>
        <Image
          src='/static/images/logo.png'
          alt='Hispanic Hacker Logo'
          width={100}
          height={100}
        />
      </div>
      <SocialsHH />
      <Menus {...props} />
    </Section>
  );
}
