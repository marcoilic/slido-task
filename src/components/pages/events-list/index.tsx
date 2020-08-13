import React from "react";

import { EventsContext } from "../../contexts/events-context/EventsProvider";

import { EventItem } from "../../layout/event-item";

import { Container } from "../../base-items/container";

import "./style.scss";

export const EventsList: React.FC = () => {
	return (
		<EventsContext.Consumer>
			{(context) => {
				return (
					<Container>
						<div className="events-wrapper">
							{context
								? context.map((item, index) => (
										<EventItem event={item} key={index} />
								  ))
								: false}
						</div>
					</Container>
				);
			}}
		</EventsContext.Consumer>
	);
};
