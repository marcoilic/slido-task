import { EventProps } from "../contexts/events-context/EventsProvider";

export const findCurrentEvent = (data, paramsId) => {
	const current = data.find((x: EventProps) => x.id === paramsId);

	return current;
};
