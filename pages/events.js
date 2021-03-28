import styled from "styled-components";

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
			<span>👷</span>
			<h1>
				To see our latest events, please visit{" "}
				<a
					href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"
					target="_blank"
				>
					Meetup.com
				</a>
				!
			</h1>
			<h2>We're working on our own calendar solution, stay tuned.</h2>
		</Main>
	);
}
