import styled from "styled-components";
import {
	FaHome,
	FaMeetup,
	FaYoutubeSquare,
	FaAngellist,
	FaFacebookSquare,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";
import globals from "../data";

const Socials = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 25%;
`;

export default function SocialsCF() {
	return (
		<Socials>
			<a
				href={globals().capitalFactory.home.url}
				alt={globals().capitalFactory.home.alt}
				target="_blank"
			>
				<FaHome size={40} />
			</a>
			<a
				href={globals().capitalFactory.home.url}
				alt={globals().capitalFactory.home.alt}
				target="_blank"
			>
				<FaMeetup size={40} />
			</a>
			<a
				href={globals().capitalFactory.twitter.url}
				alt={globals().capitalFactory.twitter.alt}
				target="_blank"
			>
				<FaTwitterSquare size={40} />
			</a>
			<a
				href={globals().capitalFactory.facebook.url}
				alt={globals().capitalFactory.facebook.alt}
				target="_blank"
			>
				<FaFacebookSquare size={40} />
			</a>
			<a
				href={globals().capitalFactory.linkedin.url}
				alt={globals().capitalFactory.linkedin.alt}
				target="_blank"
			>
				<FaLinkedin size={40} />
			</a>
			<a
				href={globals().capitalFactory.angellist.url}
				alt={globals().capitalFactory.angellist.alt}
				target="_blank"
			>
				<FaAngellist size={40} />
			</a>
			<a
				href={globals().capitalFactory.youtube.url}
				alt={globals().capitalFactory.youtube.alt}
				target="_blank"
			>
				<FaYoutubeSquare size={40} />
			</a>
		</Socials>
	);
}
