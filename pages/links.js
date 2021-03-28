import styled from "styled-components";
import Image from "next/image";
import SocialsCF from "../components/shared/SocialsCF";

const Main = styled.main`
	p {
		width: 70%;
	}
`;

export default function LinksPage() {
	return (
		<Main>
			<h1>Links</h1>
			<Image
				src="/static/images/capital_factory.png"
				alt="Capital Factory Logo"
				width={250}
				height={250}
			/>
			<p>Capital Factory</p>
			<p>701 Brazos St, Austin, TX 78701</p>
			<SocialsCF />
			<h2>Mission</h2>
			<p>
				Our mission? To be the center of gravity for entrepreneurship in Texas.
				Unofficially? Convince you to quit your job and become an entrepreneur.
			</p>
			<p>
				Capital Factory’s mission is to be the center of gravity for
				entrepreneurs in Texas, the number one startup state in the U.S.
				Thousands of entrepreneurs, programmers and designers gather day and
				night, in-person and online for meetups, classes and coworking. With
				boots on the ground in Austin, Dallas and Houston, we meet the best
				entrepreneurs in Texas and introduce them to their first investors,
				employees, mentors and customers. According to Pitchbook, Capital
				Factory has been the most active investor in Texas since 2010.
			</p>
		</Main>
	);
}
