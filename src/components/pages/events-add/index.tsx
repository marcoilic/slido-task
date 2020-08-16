import React from "react";

import { Container } from "../../base-items/container";
import { Header } from "../../layout/header";
import { EventAddForm } from "../../layout/form/event-add-form";

export const EventAdd = () => {
	return (
		<Container>
			<Header text="Create event " />
			<EventAddForm />
		</Container>
	);
};
