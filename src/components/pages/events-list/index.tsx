import React, { useContext } from "react";

import { Container } from "../../base-items/container";
import { Button } from "../../base-items/button";

import { EventItem } from "../../layout/event-item";
import { Header } from "../../layout/header";

import { eventsContext } from "../../contexts/events-context/EventsProvider";

import "./style.scss";

export const EventsList: React.FC = () => {
	const context = useContext(eventsContext);

	return (
		<Container>
			<Header text={"Events"} />
			<div className="events-wrapper">
				{context
					? context.state.map((item, index) => (
							<EventItem event={item} key={index} />
					  ))
					: false}
				<Button to="/addNewEvent">Add new event</Button>
			</div>
		</Container>
	);
};
