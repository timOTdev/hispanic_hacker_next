import { useState } from 'react';
import Layout from '../components/Layout';
import Intro from '../components/Events/Intro';
import Events from '../components/Events/Events';
import YearPicker from '../components/Events/YearPicker';

export default function EventsPage(props) {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <Layout {...props}>
      <Intro />
      <YearPicker setYear={setYear} />
      <Events year={year} />
      <YearPicker setYear={setYear} />
    </Layout>
  );
}
