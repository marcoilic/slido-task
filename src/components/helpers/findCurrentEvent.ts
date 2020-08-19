import { EventProps } from "../contexts/events-context/EventsProvider";

export const findCurrentEvent = (data: [EventProps], paramsId: string) => {
	const current = data.find((x: EventProps) => x.id === paramsId);

	return current;
};
