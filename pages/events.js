import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Intro from '../components/Events/Intro';
import Events from '../components/Events/Events';

const YearPicker = styled.div`
  margin: 0 auto;
  text-align: center;
  button {
    margin: 1rem;
  }
  hr {
    width: 20%;
  }
`;
const Button = styled.button`
  background: none;
  border-radius: 5px;
  padding: 5px;
  color: ${({ theme }) => theme.linkUnderline};
  border: 2px solid ${({ theme }) => theme.linkUnderline};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.linkUnderline};
    border: 2px solid ${({ theme }) => theme.fontColor};
  }
`;

export default function EventsPage() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <Layout>
      <Intro />
      <YearPicker>
        <hr />
        <Button onClick={() => setYear('2022')}>2022</Button>
        <Button onClick={() => setYear('2021')}>2021</Button>
        <hr />
      </YearPicker>
      <Events year={year} />
    </Layout>
  );
}
