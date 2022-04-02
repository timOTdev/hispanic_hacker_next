import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  img {
    border-radius: 3px;
  }
`;
export default function Intro() {
  return (
    <Div>
      <Image
        src='/static/images/meetup.jpg'
        alt='Hispanic Hacker Meetup'
        width={800}
        height={533}
      />
      <h1>Welcome to Hispanic Hackers!</h1>
      <h2>
        Hispanic Hackers is an Austin-based community that empowers the Latinx
        tech community. We host events that involve helping, hacking, and
        connect members in hiring. Feel free to check us out at our website to
        learn more!
      </h2>
    </Div>
  );
}
