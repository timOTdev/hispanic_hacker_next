import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 20%;
	font-size: 2rem;
`;

export default function Nav() {
	return (
		<Section>
			<Link href="/events">Events</Link>
			<Link href="/about">About</Link>
			<Link href="/links">Links</Link>
		</Section>
	);
}
