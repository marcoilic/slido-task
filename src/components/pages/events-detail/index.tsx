import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import moment from "moment";
import * as _ from "lodash";

import { Button } from "../../base-items/button";
import { Container } from "../../base-items/container";
import { Header } from "../../layout/header";
import { findCurrentEvent } from "../../helpers/findCurrentEvent";
import { eventsContext } from "../../contexts/events-context/EventsProvider";
import { IconComponent } from "../../items/icon-component";

import "./style.scss";

type TParams = { id: string };

export const EventDetail = ({ match }: RouteComponentProps<TParams>) => {
	const context = useContext(eventsContext);

	const item = findCurrentEvent(context.state, match.params.id);

	return (
		<Container>
			<Header text={!_.isNil(item) ? item.name : null} />
			<div className="details-wrapper">
				{!_.isNil(item) ? (
					<div>
						<div className="details-wrapper--row justified row-direction">
							<div>
								<IconComponent
									color="#eb5535"
									name="icon-user details-wrapper--row--icon"
								/>
								<span className="details-wrapper--row--text">Hosted by </span>
								<span className="details-wrapper--row--host">{item.host}</span>
							</div>
							<div>
								<IconComponent
									color="#eb5535"
									name="icon-location details-wrapper--row--icon"
								/>
								<span className="details-wrapper--row--text">
									{item.location}
								</span>
							</div>
						</div>
						<div className="details-wrapper--row bordered">
							<IconComponent
								color="#eb5535"
								name="icon-time details-wrapper--row--icon"
							/>
							<span className="details-wrapper--row--text">
								{moment(item.eventDate).format("lll")} -{" "}
								{moment(item.eventEnds).format("lll")}
							</span>
						</div>
						<div>
							<p className="details-wrapper--row column-direction">
								<span className="details-wrapper--row--title">
									Description:
								</span>
								<span className="details-wrapper--row--p">
									{item.description}
								</span>
							</p>
						</div>
					</div>
				) : (
					<h3 className="invalid-url">This URL doesn't exist. Sorry :)</h3>
				)}
				<Button className="details-wrapper--button" to="/">
					Back
				</Button>
			</div>
		</Container>
	);
};
