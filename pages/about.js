import styled from "styled-components";
import Profile from "../components/shared/Profile";
import globals from "../components/data";
import Image from "next/image";

const Main = styled.main`
	font-size: 2.4rem;
	img {
		display: flex;
		justify-content: center;
	}
`;
const ExecutiveTeam = styled.section`
	display: flex;
	justify-content: space-around;
`;
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

export default function AboutPage() {
	return (
		<Main>
			<h1>Meet the Executive Team</h1>
			<ExecutiveTeam>
				<Profile
					image="/static/images/eddy.jpg"
					name={globals().profiles.eddy.name}
					linkedin={globals().profiles.eddy.linkedin}
					email={globals().profiles.eddy.email}
					bio={globals().profiles.eddy.bio}
				/>
				<Profile
					image="/static/images/james.jpg"
					name={globals().profiles.james.name}
					linkedin={globals().profiles.james.linkedin}
					email={globals().profiles.james.email}
					bio={globals().profiles.james.bio}
				/>
				<Profile
					image="/static/images/laura.jpg"
					name={globals().profiles.laura.name}
					linkedin={globals().profiles.laura.linkedin}
					email={globals().profiles.laura.email}
					bio={globals().profiles.laura.bio}
				/>
				<Profile
					image="/static/images/tim.jpg"
					name={globals().profiles.tim.name}
					linkedin={globals().profiles.tim.linkedin}
					email={globals().profiles.tim.email}
					bio={globals().profiles.tim.bio}
				/>
			</ExecutiveTeam>
			<h1>Join the Team or Get Involved</h1>
			<RecruitMessage>
				<a
					src={globals().profiles.tim.email}
					href={`mailto:${globals().profiles.tim.email}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					Reach out to us at hispanichackersboard@gmail.com ya!
				</a>
				🤭
			</RecruitMessage>
			<Recruit>
				<ul>
					<Image
						src="/static/images/zoom2.jpg"
						alt="Zoom meetup"
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
						src="/static/images/zoom.png"
						alt="Zoom meetup"
						width={846.5}
						height={481.5}
					/>
					<li>Gain recognition for future job role</li>
					<li>Great chance to develop leadership skills</li>
					<li>Access to the world-class Capital Factory facility</li>
					<li>A chance to meet our mascots: El Chico, El Freddie</li>
				</ul>
			</Recruit>
		</Main>
	);
}
