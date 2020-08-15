import React, { useContext } from "react";
import { useForm, useField } from "react-final-form-hooks";
import { Input } from "../../../base-items/input";
import {
	eventsContext,
	EventProps,
} from "../../../contexts/events-context/EventsProvider";

interface Event {
	event: EventProps;
}

export const EventAddForm = () => {
	const { dispatch } = useContext(eventsContext);

	const onSubmit = (values: Event) => {
		console.log("OUR VALUES", values);
		dispatch({ type: "ADD_EVENT", values });
	};

	const { form, handleSubmit, values, pristine, submitting } = useForm({
		onSubmit,
		// validate,
	});

	const name = useField("name", form);
	const host = useField("host", form);
	const description = useField("description", form);
	const location = useField("location", form);
	const eventDate = useField("eventDate", form);
	const eventsEnds = useField("eventsEnds", form);

	// console.log("form values", values);
	// console.log("form pristine", pristine);
	// console.log("form submitting", submitting);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Input {...name.input} label="Name" />
				{name.meta.touched && name.meta.error && <span>{name.meta.error}</span>}
			</div>
			<div>
				<Input {...host.input} label="Host" />
				{host.meta.touched && host.meta.error && <span>{host.meta.error}</span>}
			</div>
			<div>
				<Input {...description.input} label="Description" />
				{description.meta.touched && description.meta.error && (
					<span>{description.meta.error}</span>
				)}
			</div>
			<div>
				<Input {...location.input} label="Location" />
				{location.meta.touched && location.meta.error && (
					<span>{location.meta.error}</span>
				)}
			</div>
			<div>
				<Input {...eventDate.input} label="Event date" />
				{eventDate.meta.touched && eventDate.meta.error && (
					<span>{eventDate.meta.error}</span>
				)}
			</div>
			<div>
				<Input {...eventsEnds.input} label="Event ends" />
				{eventsEnds.meta.touched && eventsEnds.meta.error && (
					<span>{location.meta.error}</span>
				)}
			</div>
			<div className="buttons">
				<button type="submit" disabled={submitting}>
					Submit
				</button>
				{/* <button
					type="button"
					onClick={() => form.reset()}
					disabled={submitting || pristine}
				>
					Reset
				</button> */}
			</div>
			<pre>{JSON.stringify(values, undefined, 2)}</pre>
		</form>
	);
};
