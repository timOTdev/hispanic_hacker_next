import styled from "styled-components";
import Profile from "../components/shared/Profile";
import globals from "../components/data";

const Main = styled.main``;
const ExecutiveTeam = styled.section`
	display: flex;
	justify-content: space-around;
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
		</Main>
	);
}
