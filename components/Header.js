import styled from "styled-components";
import Image from "next/image";
import SocialsHH from "./shared/SocialsHH";
import Menus from "./shared/Menus";

const Wrapper = styled.section`
	display: flex;
	justify-content: space-around;
	background: var(--pageHeaderColor);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
`;

const Logo = styled.span`
	display: flex;
	width: 10%;
`;

export default function Header() {
	return (
		<Wrapper>
			<Logo>
				<Image
					src="/static/images/logo.png"
					alt="Hispanic Hacker Logo"
					width={100}
					height={100}
				/>
			</Logo>
			<SocialsHH />
			<Menus />
		</Wrapper>
	);
}
