import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { EventsList } from "../components/pages/events-list";
import { EventDetail } from "../components/pages/events-detail";
import { EventAdd } from "../components/pages/events-add";

import { EventsProvider } from "../components/contexts/events-context/EventsProvider";

export const Router = () => {
	return (
		<EventsProvider>
			<HashRouter>
				<Switch>
					<Route path="/" exact={true} component={EventsList} />
					<Route path="/addNewEvent" exact={true} component={EventAdd} />
					<Route path="/:id" exact={true} component={EventDetail} />
				</Switch>
			</HashRouter>
		</EventsProvider>
	);
};
