import styled from "styled-components";
import Link from "next/link";
import Socials from "./shared/Socials";
import Menus from "./shared/Menus";
import { FcLike } from "react-icons/fc";

const Wrapper = styled.footer`
	display: flex;
	justify-content: space-around;
	background: var(--pageHeaderColor);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 -8px 6px -6px black;
	position: absolute;
	width: 100%;
	bottom: 0px;
`;
const Copyright = styled.div`
	font-size: 2rem;
	width: 10%;
`;

export default function Footer() {
	return (
		<Wrapper>
			<Copyright>
				<p>
					Made with coffee, cumbia, and care. <FcLike />{" "}
					{new Date().getFullYear()}
				</p>
			</Copyright>
			<Socials>
				<a href="">Meetup</a>
				<a href="">Slack</a>
				<a href="">Youtube</a>
				<a href="">Instagram</a>
			</Socials>
			<Menus>
				<Link href="/events">Events</Link>
				<Link href="/about">About</Link>
				<Link href="/links">Links</Link>
			</Menus>
		</Wrapper>
	);
}
