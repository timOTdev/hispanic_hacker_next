import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import globals from '../../assets/GlobalData';

const ExecutiveTeam = styled.section`
  display: flex;
  justify-content: space-around;
`;

export default function Team() {
  return (
    <div>
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
          image='/static/images/laura.jpg'
          name={globals().profilesHH.laura.name}
          linkedin={globals().profilesHH.laura.linkedin}
          email={globals().profilesHH.laura.email}
          bio={globals().profilesHH.laura.bio}
        />
        <Profile
          image='/static/images/tim.jpg'
          name={globals().profilesHH.tim.name}
          linkedin={globals().profilesHH.tim.linkedin}
          email={globals().profilesHH.tim.email}
          bio={globals().profilesHH.tim.bio}
        />
      </ExecutiveTeam>
    </div>
  );
}
