import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "../App";

export const Router = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" exact={true} component={App} />
			</Switch>
		</HashRouter>
	);
};
