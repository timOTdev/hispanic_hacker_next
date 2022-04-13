import styled from 'styled-components';
import Link from 'next/link';
import {
  FcHome,
  FcPlanner,
  FcConferenceCall,
  FcWorkflow,
} from 'react-icons/fc';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  span {
    flex: 1 1 100%;
    padding: 1rem;
    @media (min-width: 1024px) {
      flex: 1 1 90%;
    }
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    @media (min-width: 425px) {
      display: block;
      margin: 0 auto;
    }
  }
  button {
    font-size: 20px;
    background: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.backgroundContrast};
    border: 2px solid ${({ theme }) => theme.backgroundContrast};
    :hover {
      border: 2px solid ${({ theme }) => theme.fontColor};
    }
  }
  @media (min-width: 425px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export default function Nav({ theme, toggleTheme }) {
  return (
    <Section>
      <Link href='/'>
        <span>
          <FcHome />
          &nbsp;Home
        </span>
      </Link>
      <Link href='/events'>
        <span>
          <FcPlanner />
          &nbsp;Events
        </span>
      </Link>
      <Link href='/about'>
        <span>
          <FcConferenceCall />
          &nbsp;About
        </span>
      </Link>
      <Link href='/links'>
        <span>
          <FcWorkflow />
          &nbsp;Links
        </span>
      </Link>
      <button onClick={() => toggleTheme(theme)}>
        {theme == 'dark' ? <span>☀️</span> : <span>🌙</span>}
      </button>
    </Section>
  );
}
