import styled from "styled-components";
import Events from "../components/shared/Events";

const Main = styled.main`
	text-align: center;
	a {
		text-decoration: underline;
	}
	span {
		font-size: 20rem;
	}
`;

export default function EventsPage() {
	return (
		<Main>
			<h1>Events Calendar 2021</h1>
			<h3>
				Events are hosted at the Capital Factory or Zoom. Visit us at{" "}
				<a
					href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"
					target="_blank"
				>
					Meetup.com
				</a>
				.
				<br /> We also have social and collab events, follow #social-events and
				#external_events on our{" "}
				<a
					href="https://hispanichackers.slack.com/join/shared_invite/zt-8mq8l0o5-8REvn1I_QhaIb2wkE4xHfQ#/"
					target="_blank"
				>
					Slack
				</a>
				.
			</h3>
			<Events />
		</Main>
	);
}
