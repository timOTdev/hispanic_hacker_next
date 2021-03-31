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
					name={globals().profilesHH.eddy.name}
					linkedin={globals().profilesHH.eddy.linkedin}
					email={globals().profilesHH.eddy.email}
					bio={globals().profilesHH.eddy.bio}
				/>
				<Profile
					image="/static/images/james.png"
					name={globals().profilesHH.james.name}
					linkedin={globals().profilesHH.james.linkedin}
					email={globals().profilesHH.james.email}
					bio={globals().profilesHH.james.bio}
				/>
				<Profile
					image="/static/images/laura.jpg"
					name={globals().profilesHH.laura.name}
					linkedin={globals().profilesHH.laura.linkedin}
					email={globals().profilesHH.laura.email}
					bio={globals().profilesHH.laura.bio}
				/>
				<Profile
					image="/static/images/tim.jpg"
					name={globals().profilesHH.tim.name}
					linkedin={globals().profilesHH.tim.linkedin}
					email={globals().profilesHH.tim.email}
					bio={globals().profilesHH.tim.bio}
				/>
			</ExecutiveTeam>
			<h1>Join the Team or Get Involved</h1>
			<RecruitMessage>
				<a
					src={globals().profilesHH.tim.email}
					href={`mailto:${globals().profilesHH.tim.email}`}
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
