import React, { useContext } from "react";
import { useForm, useField } from "react-final-form-hooks";
import { useHistory } from "react-router-dom";

import { Input } from "../../../base-items/input";
import { Button } from "../../../base-items/button";
import { TextArea } from "../../../base-items/textarea";
import {
	eventsContext,
	EventProps,
} from "../../../contexts/events-context/EventsProvider";
import { validate } from "../validation";

import "./style.scss";

interface Event {
	event: EventProps;
}

export const EventAddForm: React.FC = () => {
	const { dispatch } = useContext(eventsContext);
	const history = useHistory();

	const onSubmit = (values: Event) => {
		dispatch({ type: "ADD_EVENT", values });
		history.push("/");
	};

	const { form, handleSubmit, submitting } = useForm({
		onSubmit,
	});

	const name = useField("name", form, (value) => validate(value));
	const host = useField("host", form, (value) => validate(value));
	const description = useField("description", form, (value) => validate(value));
	const location = useField("location", form, (value) => validate(value));
	const eventDate = useField("eventDate", form, (value) => validate(value));
	const eventEnds = useField("eventEnds", form, (value) => validate(value));

	return (
		<div className="form-wrapper">
			<form onSubmit={handleSubmit}>
				<div className="form-wrapper--input-wrapper">
					<Input
						label="Name"
						{...name.input}
						placeholder="Write an event name..."
						id="name-test-id"
					/>
					{name.meta.touched && name.meta.error && (
						<span className="form-wrapper--error">{name.meta.error}</span>
					)}
				</div>
				<div className="form-wrapper--input-wrapper">
					<Input
						label="Host"
						{...host.input}
						placeholder="Write an event host..."
						id="host-test-id"
					/>
					{host.meta.touched && host.meta.error && (
						<span className="form-wrapper--error">{host.meta.error}</span>
					)}
				</div>
				<div className="form-wrapper--input-wrapper">
					<Input
						label="Location"
						placeholder="Write the location of an event..."
						{...location.input}
						id="location-test-id"
					/>
					{location.meta.touched && location.meta.error && (
						<span className="form-wrapper--error">{location.meta.error}</span>
					)}
				</div>
				<div className="form-wrapper--textarea-wrapper">
					<TextArea
						id="description-test-id"
						label="Description"
						rows={5}
						{...description.input}
					/>
					{description.meta.touched && description.meta.error && (
						<span className="form-wrapper--error">
							{description.meta.error}
						</span>
					)}
				</div>
				<div className="form-wrapper--datepickers-wrapper">
					<div className="form-wrapper--datepickers-wrapper--item">
						<Input
							id="event-date-test-id"
							inputType="date"
							label="Event date"
							minDate={new Date()}
							{...eventDate.input}
						/>
						{eventDate.meta.touched && eventDate.meta.error && (
							<span className="form-wrapper--error">
								{eventDate.meta.error}
							</span>
						)}
					</div>
					<div className="form-wrapper--datepickers-wrapper--item">
						<Input
							id="event-ends-test-id"
							inputType="date"
							label="Event ends"
							disabled={!eventDate.input.value}
							minDate={eventDate.input.value}
							{...eventEnds.input}
						/>
						{eventEnds.meta.touched && eventEnds.meta.error && (
							<span className="form-wrapper--error">
								{eventEnds.meta.error}
							</span>
						)}
					</div>
				</div>

				<div className="form-wrapper--buttons">
					<Button buttonType="submit" disabled={submitting} id="submit-test-id">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};
