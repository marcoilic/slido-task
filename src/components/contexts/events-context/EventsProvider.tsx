import React, { useState, createContext } from "react";
import { Events } from "../../../storage/Events";

export interface EventProps {
	id: string;
	name: string;
	description: string;
	location: string;
	eventDate: string;
	eventEnds: string;
}

export const EventsContext = createContext(Events);

export const EventsProvider = (props) => {
	const [data] = useState<EventProps[]>(Events);

	return (
		<EventsContext.Provider value={data}>
			{props.children}
		</EventsContext.Provider>
	);
};
