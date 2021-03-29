import globals from "../data";
import styled from "styled-components";
import { FaMeetup } from "react-icons/fa";

const EventsWrapper = styled.aside`
	display: flex;
	flex-wrap: wrap;
`;
const EventCard = styled.div`
	border: 1px solid white;
	border-radius: 10px;
	flex: 1 1 1;
	justify-content: center;
	width: 30%;
	margin: 2rem auto;
`;
const Meetup = styled(FaMeetup)`
	color: #e61b3e;
`;

export default function Events() {
	return (
		<EventsWrapper>
			{Object.values(globals().eventsHH["2021"]).map((event, index) => (
				<EventCard key={index}>
					<h3>{event.month}</h3>
					<a href={event.meetup} target="_blank">
						<Meetup size={40} />
					</a>
					<p>
						<em>{event.name}</em>
						<br />
						<u>Date</u>: {event.date}
						<br />
						<u>Time</u>: {event.time}
						<br />
					</p>
				</EventCard>
			))}
		</EventsWrapper>
	);
}
