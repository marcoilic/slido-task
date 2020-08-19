import React, { useContext } from "react";
import moment from "moment";
import * as _ from "lodash";

import { Container } from "../../base-items/container";
import { Button } from "../../base-items/button";
import { EventItem } from "../../layout/event-item";
import { Header } from "../../layout/header";

import {
	EventProps,
	eventsContext,
} from "../../contexts/events-context/EventsProvider";

import "./style.scss";

export const EventsList: React.FC = () => {
	const context = useContext(eventsContext);

	context.state.sort((a: EventProps, b: EventProps) => {
		const dateDifference = moment(a.eventDate).diff(b.eventDate);

		if (a.isPastEvent === b.isPastEvent) {
			return a.isPastEvent ? -dateDifference : dateDifference;
		} else {
			return a.isPastEvent ? 1 : -1;
		}
	});

	return (
		<Container>
			<Header text={"Events"} />
			<div className="events-wrapper">
				{!_.isNil(context)
					? context.state.map((item, index) => (
							<EventItem event={item} key={index} />
					  ))
					: false}
				<Button to="/addNewEvent" id="addNewEvent">
					Add new event
				</Button>
			</div>
		</Container>
	);
};
