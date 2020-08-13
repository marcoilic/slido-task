import React from "react";

import { Button } from "../../base-items/button";
import { Link } from "react-router-dom";

import { EventProps } from "../../contexts/events-context/EventsProvider";

interface EventItemProps {
	event: EventProps;
}

export const EventItem = ({ event }: EventItemProps) => {
	return (
		<div>
			<Link className="text--link" to={`/${event.id}`}>
				<p>Name: {event.name}</p>
			</Link>

			<p>id: {event.id}</p>
			<p>name: {event.name}</p>
			<p>description: {event.description}</p>
			<p>location: {event.location}</p>
			<p>eventDate: {event.eventDate}</p>
			<p>eventEnds: {event.eventEnds}</p>

			<Button to={`/${event.id}`}>More info</Button>
		</div>
	);
};
