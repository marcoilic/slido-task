import * as uuid from "uuid";

export const EventReducer = (state, action) => {
	switch (action.type) {
		case "ADD_EVENT":
			return [
				...state,
				{
					id: uuid.v4(),
					name: action.values.name,
					host: action.values.host,
					description: action.values.description,
					location: action.values.location,
					eventDate: action.values.eventDate,
					eventEnds: action.values.eventEnds,
				},
			];

		case "DELETE_EVENT":
			return state.filter((item) => item.id !== action.event.id);

		default:
			return state;
	}
};
