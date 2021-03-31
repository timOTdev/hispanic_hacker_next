import globals from "../data";
import styled from "styled-components";
import {
	FaMeetup,
	FaYoutubeSquare,
	FaFilePowerpoint,
	FaComments,
} from "react-icons/fa";
import Image from "next/image";

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
	img {
		border-radius: 5px;
	}
	a {
		display: block;
	}
`;
const EventCardLinks = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
const Meetup = styled(FaMeetup)`
	color: #e61b3e;
`;
const Youtube = styled(FaYoutubeSquare)`
	color: #f70000;
`;
const Powerpoint = styled(FaFilePowerpoint)`
	color: #e86900;
`;
const Chat = styled(FaComments)`
	color: #41abff;
`;

export default function Events() {
	return (
		<EventsWrapper>
			{Object.values(globals().eventsHH["2021"]).map((event, index) => (
				<EventCard key={index}>
					<h3>{event.month}</h3>
					<Image
						src={
							event.titleSlide
								? `/static/images/${event.titleSlide}`
								: "/static/images/hyped.png"
						}
						alt={event.name + event.date}
						width={480}
						height={270}
					/>
					<EventCardLinks>
						{event.meetup ? (
							<a href={event.meetup} target="_blank">
								<Meetup size={40} title="Meetup Event Page" />
							</a>
						) : (
							""
						)}
						{event.slides ? (
							<a href={event.slides} target="_blank">
								<Powerpoint size={40} title="Powerpoint Slides" />
							</a>
						) : (
							""
						)}
						{event.youtube ? (
							<a href={event.youtube} target="_blank">
								<Youtube size={40} title="Youtube Replay" />
							</a>
						) : (
							""
						)}
						{event.zoomChat ? (
							<a href={event.zoomChat} target="_blank">
								<Chat size={40} title="Zoom Chat" />
							</a>
						) : (
							""
						)}
					</EventCardLinks>
					<p>
						<u>{event.name}</u>
						<br />
						<em>Date</em>: {event.date}
						<br />
						<em>Time</em>: {event.time}
						<br />
					</p>
				</EventCard>
			))}
		</EventsWrapper>
	);
}
