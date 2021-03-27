import Link from "next/link";
import styled from "styled-components";
import {
	FcHome,
	FcPlanner,
	FcConferenceCall,
	FcWorkflow,
} from "react-icons/fc";

const Section = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 25%;
	font-size: 2rem;

	span:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export default function Nav() {
	return (
		<Section>
			<Link href="/">
				<span>
					<FcHome />
					&nbsp;Home
				</span>
			</Link>
			<Link href="/events">
				<span>
					<FcPlanner />
					&nbsp;Events
				</span>
			</Link>
			<Link href="/about">
				<span>
					<FcConferenceCall />
					&nbsp;About
				</span>
			</Link>
			<Link href="/links">
				<span>
					<FcWorkflow />
					&nbsp;Links
				</span>
			</Link>
		</Section>
	);
}
