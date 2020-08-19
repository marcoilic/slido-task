import React, { useReducer, createContext } from "react";
import { Events } from "../../../storage/Events";
import { EventReducer } from "../../reducers/event-reducer";

export interface EventProps {
	id: string;
	name: string;
	host: string;
	description: string;
	location: string;
	eventDate: string;
	eventEnds: string;
	isPastEvent: boolean;
}

const initialState: any = Events;

const eventsContext = createContext(initialState);

const { Provider } = eventsContext;

const EventsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(EventReducer, [initialState], () => {
		return initialState;
	});

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { EventsProvider, eventsContext };
