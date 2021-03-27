import Image from "next/image";
import styled from "styled-components";

const Main = styled.main`
	margin: 1.5rem auto;
`;
const Intro = styled.div`
	text-align: center;
	width: 70%;
	margin: 0 auto;
	img {
		border-radius: 3px;
	}
`;
const Mission = styled.div`
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

export default function IndexPage() {
	return (
		<Main>
			<Intro>
				<Image
					src="/static/images/meetup.jpg"
					alt="Hispanic Hacker Meetup"
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
			</Intro>
			<Mission>
				<div>
					<h3>Help🧭</h3>
					<p>
						Hispanic Hackers helps cultivate diversity in the Tech Community
						through our informative and thought-provoking monthly meetups
						surrounding the topics in the Latino Community. Our three core
						values Help, Hack and Hire provide support and connect Latinos
						across the Tech Industry in Austin, TX.
					</p>
				</div>
				<div>
					<h3>Hack 🔭</h3>
					<p>
						Hispanic Hackers use technology as a conduit to empower our
						community. During our Hack series, we present topics relevant to
						Hispanics in Tech with a goal to learn from each other and provide
						an environment to share opinions and different points of view.
					</p>
				</div>
				<div>
					<h3>Hire ⚖️</h3>
					<p>
						Hispanic Hackers serve as a liaison between companies hoping to hire
						a more diverse workforce and technology professionals searching for
						the next step in their career. Coding Interview Practices and other
						workforce development programs represent some of our leadership in
						promoting diversity.
					</p>
				</div>
			</Mission>
		</Main>
	);
}
