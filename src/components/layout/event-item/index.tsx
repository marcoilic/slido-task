import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../base-items/button";

import {
	eventsContext,
	EventProps,
} from "../../contexts/events-context/EventsProvider";

interface EventItemProps {
	event: EventProps;
}

export const EventItem = ({ event }: EventItemProps) => {
	const { dispatch } = useContext(eventsContext);

	const onRemove = () => {
		dispatch({ type: "DELETE_EVENT", event });
	};

	return (
		<div>
			<Link className="text--link" to={`/${event.id}`}>
				<p>Name: {event.name}</p>
			</Link>

			<p>id: {event.id}</p>
			<p>host: {event.host}</p>
			<p>name: {event.name}</p>

			<Button to={`/${event.id}`}>More info</Button>
			<Button onClick={onRemove}>Delete event</Button>
		</div>
	);
};
