import styled from 'styled-components';
import Image from 'next/image';
import globals from '../../assets/GlobalData';

const RecruitMessage = styled.h3`
  text-align: center;
  font-size: 2rem;
  a {
    text-decoration: underline;
  }
`;
const Recruit = styled.section`
  display: flex;
  justify-content: space-around;
  font-size: 1.8rem;
  ul {
    max-width: 50%;
  }
`;

export default function Recruiting() {
  return (
    <div>
      <h1>Join the Team or Get Involved</h1>
      <RecruitMessage>
        <a
          src={globals().profilesHH.tim.email}
          href={`mailto:${globals().profilesHH.tim.email}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Reach out to us at hispanichackersboard@gmail.com ya!
        </a>
        🤭
      </RecruitMessage>
      <Recruit>
        <ul>
          <Image
            src='/static/images/zoom2.jpg'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
          />
          <li>We’re open for new members to the leadership team</li>
          <li>Speakers are welcome for tech and culture topics</li>
          <li>Continuous iteration on improving our events and organization</li>
          <li>Bring your phenomenal skills and we'll work with it</li>
        </ul>
        <ul>
          <Image
            src='/static/images/zoom.png'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
          />
          <li>Gain recognition for future job role</li>
          <li>Great chance to develop leadership skills</li>
          <li>Access to the world-class Capital Factory facility</li>
          <li>A chance to meet our mascots: El Chico, El Freddie</li>
        </ul>
      </Recruit>
    </div>
  );
}
