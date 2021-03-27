import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import Menus from "./Menus";

const Wrapper = styled.header`
	display: flex;
	justify-content: space-around;
	background: var(--pageHeaderColor);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
`;

const Logo = styled.section`
	display: flex;
	align-items: center;
	width: 10%;
`;

export default function Header() {
	return (
		<Wrapper>
			<Logo>
				<Link href="/">
					<Image
						src="/static/images/logo.png"
						alt="Hispanic Hacker Logo"
						width={100}
						height={100}
					/>
				</Link>
			</Logo>
			<Socials />
			<Menus />
		</Wrapper>
	);
}
