import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Button } from "../../base-items/button";
import { Container } from "../../base-items/container";
import { EventsContext } from "../../contexts/events-context/EventsProvider";
import { findCurrentEvent } from "../../helpers/findCurrentEvent";

type TParams = { id: string };

export const EventDetail = ({ match }: RouteComponentProps<TParams>) => {
	return (
		<EventsContext.Consumer>
			{(context) => {
				let item = findCurrentEvent(context, match.params.id);

				return (
					<Container>
						{item ? (
							<div>
								Event name: {item.name}
								Event description: {item.description}
							</div>
						) : null}
						<Button to="/">back</Button>
					</Container>
				);
			}}
		</EventsContext.Consumer>
	);
};
