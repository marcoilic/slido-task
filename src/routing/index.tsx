import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { EventsList } from "../components/pages/events-list";
import { EventDetail } from "../components/pages/events-detail";
import { EventsProvider } from "../components/contexts/events-context/EventsProvider";

export const Router = () => {
	return (
		<HashRouter>
			<Switch>
				<EventsProvider>
					<Route path="/" exact={true} component={EventsList} />
					<Route path="/:id" exact={true} component={EventDetail} />
				</EventsProvider>
			</Switch>
		</HashRouter>
	);
};
