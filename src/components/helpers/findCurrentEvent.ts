// TODO: interface props

export const findCurrentEvent = (data, paramsId) => {
	const current = data.find((x) => x.id === paramsId);

	return current;
};
