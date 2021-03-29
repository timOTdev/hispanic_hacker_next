import styled from "styled-components";
import {
	FaMeetup,
	FaYoutubeSquare,
	FaSlackHash,
	FaInstagram,
	FaFacebookSquare,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";
import globals from "../data";

const Section = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	width: 30%;

	a {
		&:hover {
			transform: scale(1.2);
		}
	}
`;
const Meetup = styled(FaMeetup)`
	color: #e61b3e;
`;
const Youtube = styled(FaYoutubeSquare)`
	color: #f70000;
`;
const Slack = styled(FaSlackHash)`
	color: darkslategray;
	background: linear-gradient(90deg, #36c5f0, #2eb67d, #e01e5a, #ecb22e);
	border-radius: 3px;
`;
const Facebook = styled(FaFacebookSquare)`
	color: #1773ea;
`;
const LinkedIn = styled(FaLinkedin)`
	color: #0073b1;
`;
const Twitter = styled(FaTwitterSquare)`
	color: #0077b5;
`;
const Instagram = styled(FaInstagram)`
	color: white;
	border-radius: 10%;
	background: #d6249f;
	background: radial-gradient(
		circle at 30% 107%,
		#fdf497 0%,
		#fdf497 5%,
		#fd5949 45%,
		#d6249f 60%,
		#285aeb 90%
	);
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

export default function Socials() {
	return (
		<Section>
			<a
				href={globals().socialsHH.meetup.url}
				alt={globals().socialsHH.meetup.alt}
				target="_blank"
			>
				<Meetup size={40} />
			</a>
			<a
				href={globals().socialsHH.youtube.url}
				alt={globals().socialsHH.youtube.alt}
				target="_blank"
			>
				<Youtube size={40} />
			</a>
			<a
				href={globals().socialsHH.slack.url}
				alt={globals().socialsHH.slack.alt}
				target="_blank"
			>
				<Slack size={40} />
			</a>
			<a
				href={globals().socialsHH.instagram.url}
				alt={globals().socialsHH.instagram.alt}
				target="_blank"
			>
				<Instagram size={40} />
			</a>
			<a
				href={globals().socialsHH.facebook.url}
				alt={globals().socialsHH.facebook.alt}
				target="_blank"
			>
				<Facebook size={40} />
			</a>
			<a
				href={globals().socialsHH.linkedin.url}
				alt={globals().socialsHH.linkedin.alt}
				target="_blank"
			>
				<LinkedIn size={40} />
			</a>
			<a
				href={globals().socialsHH.twitter.url}
				alt={globals().socialsHH.twitter.alt}
				target="_blank"
			>
				<Twitter size={40} />
			</a>
		</Section>
	);
}
