import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    margin: 2rem;
  }
  h3 {
    font-size: 2.6rem;
    text-align: center;
  }
`;
export default function Mission() {
  return (
    <Div>
      <div>
        <h3>Help🧭</h3>
        <p>
          Hispanic Hackers helps cultivate diversity in the Tech Community
          through our informative and thought-provoking monthly meetups
          surrounding the topics in the Latino Community. Our three core values
          Help, Hack and Hire provide support and connect Latinos across the
          Tech Industry in Austin, TX.
        </p>
      </div>
      <div>
        <h3>Hack 🔭</h3>
        <p>
          Hispanic Hackers use technology as a conduit to empower our community.
          During our Hack series, we present topics relevant to Hispanics in
          Tech with a goal to learn from each other and provide an environment
          to share opinions and different points of view.
        </p>
      </div>
      <div>
        <h3>Hire ⚖️</h3>
        <p>
          Hispanic Hackers serve as a liaison between companies hoping to hire a
          more diverse workforce and technology professionals searching for the
          next step in their career. Coding Interview Practices and other
          workforce development programs represent some of our leadership in
          promoting diversity.
        </p>
      </div>
    </Div>
  );
}
