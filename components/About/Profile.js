import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Aside = styled.aside`
  text-align: center;
  p {
    font-size: 1.8rem;
  }
  a {
    border-bottom: 2px solid ${({ theme }) => theme.backgroundColor};
    :hover {
      border-bottom: 2px solid ${({ theme }) => theme.linkUnderline};
    }
  }
  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
  @media (min-width: 1024px) {
    flex: 1 1 30%;
  }
  @media (min-width: 2560px) {
    p {
      width: 60%;
      margin: 0 auto;
    }
  }
`;
const ProfileLinks = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  margin: 0 auto;
  span {
    text-decoration: underline;
  }
  @media (min-width: 2560px) {
    max-width: 30%;
  }
`;
const Image1 = styled(Image)`
  height: 200%;
  width: 200%;
  border-radius: 50%;
`;
const LinkedIn = styled(FaLinkedin)`
  color: #0073b1;
`;

export default function Profile(props) {
  return (
    <Aside>
      <Image1 src={props.image} alt='Eddy' width={200} height={200} />
      <h2>{props.name}</h2>
      <ProfileLinks>
        <a href={props.linkedin} target='_blank'>
          <LinkedIn size={30} />
        </a>
        <a
          href={`mailto:${props.email}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaEnvelope size={30} />
        </a>
      </ProfileLinks>
      <p>{props.bio}</p>
    </Aside>
  );
}
