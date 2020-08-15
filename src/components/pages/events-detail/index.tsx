import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Button } from "../../base-items/button";
import { Container } from "../../base-items/container";
import { Header } from "../../layout/header";
import { findCurrentEvent } from "../../helpers/findCurrentEvent";
import { eventsContext } from "../../contexts/events-context/EventsProvider";

type TParams = { id: string };

export const EventDetail = ({ match }: RouteComponentProps<TParams>) => {
	const context = useContext(eventsContext);

	const item = findCurrentEvent(context.state, match.params.id);

	return (
		<Container>
			<Header text={item ? item.name : null} />
			{item ? (
				<div>
					Event name: {item.name}
					Event description: {item.description}
				</div>
			) : null}
			<Button to="/">back</Button>
		</Container>
	);
};
