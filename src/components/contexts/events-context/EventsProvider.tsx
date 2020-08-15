import React, { useReducer, createContext } from "react";
import { Events } from "../../../storage/Events";
import { eventReducer } from "../../reducers/event-reducer";

export interface EventProps {
	id: string;
	name: string;
	host: string;
	description: string;
	location: string;
	eventDate: string;
	eventEnds: string;
	peopleInterested: number;
}

const initialState: any = Events;

const eventsContext = createContext(initialState);

const { Provider } = eventsContext;

const EventsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(eventReducer, [initialState], () => {
		return initialState;
	});

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { EventsProvider, eventsContext };
