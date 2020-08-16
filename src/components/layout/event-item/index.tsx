import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../base-items/button";
import { IconComponent } from "../../items/icon";

import {
	eventsContext,
	EventProps,
} from "../../contexts/events-context/EventsProvider";

import "./style.scss";

interface EventItemProps {
	event: EventProps;
}

export const EventItem = ({ event }: EventItemProps) => {
	const { dispatch } = useContext(eventsContext);

	const onRemove = () => {
		dispatch({ type: "DELETE_EVENT", event });
	};

	return (
		<div className="event-item-wrapper">
			<div className="event-item-wrapper--leftside">
				<span className="event-item-wrapper--leftside--dates">
					{event.eventDate} - {event.eventEnds}
				</span>
				<Link
					className="event-item-wrapper--leftside--name"
					to={`/${event.id}`}
				>
					<span>{event.name}</span>
				</Link>
				<span className="event-item-wrapper--leftside--host">
					<IconComponent
						color="#949494"
						name="icon-user event-item-wrapper--leftside--host-icon"
					/>
					<i>
						Hosted by{" "}
						<span className="event-item-wrapper--leftside--host-hostname">
							{" "}
							{event.host}
						</span>
					</i>
				</span>
			</div>
			<div className="event-item-wrapper--rightside">
				<Button to={`/${event.id}`}>View details</Button>
				{/* <Button onClick={onRemove}>Delete event</Button> */}
				<IconComponent name="icon-trash customIcon" onClick={onRemove} />
			</div>
		</div>
	);
};
