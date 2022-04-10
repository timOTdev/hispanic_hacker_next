import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import globals from '../../assets/GlobalData';

const Section = styled.section`
  text-align: center;
`;
const ExecutiveTeam = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 768px) {
    * {
      flex: 1 1 50%;
    }
  }
  @media (min-width: 1024px) {
    * {
      flex: 1 1 30%;
      margin: 0 1rem;
    }
  }
`;

export default function Team() {
  return (
    <Section>
      <h1>Meet the Executive Team</h1>
      <ExecutiveTeam>
        <Profile
          image='/static/images/eddy.jpg'
          name={globals().profilesHH.eddy.name}
          linkedin={globals().profilesHH.eddy.linkedin}
          email={globals().profilesHH.eddy.email}
          bio={globals().profilesHH.eddy.bio}
        />
        <Profile
          image='/static/images/james.png'
          name={globals().profilesHH.james.name}
          linkedin={globals().profilesHH.james.linkedin}
          email={globals().profilesHH.james.email}
          bio={globals().profilesHH.james.bio}
        />
        <Profile
          image='/static/images/lauraE.jpg'
          name={globals().profilesHH.lauraE.name}
          linkedin={globals().profilesHH.lauraE.linkedin}
          email={globals().profilesHH.lauraE.email}
          bio={globals().profilesHH.lauraE.bio}
        />
        <Profile
          image='/static/images/lauraH.jpg'
          name={globals().profilesHH.lauraH.name}
          linkedin={globals().profilesHH.lauraH.linkedin}
          email={globals().profilesHH.lauraH.email}
          bio={globals().profilesHH.lauraH.bio}
        />
        <Profile
          image='/static/images/tim.jpg'
          name={globals().profilesHH.tim.name}
          linkedin={globals().profilesHH.tim.linkedin}
          email={globals().profilesHH.tim.email}
          bio={globals().profilesHH.tim.bio}
        />
      </ExecutiveTeam>
    </Section>
  );
}
