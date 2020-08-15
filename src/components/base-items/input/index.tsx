import * as React from "react";

import { Label } from "../label";

// import "./style.scss";

export interface InputProps {
	id?: string;
	placeholder?: string;
	defaultValue?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler;
	onChange?: any;
	name?: string;
	ref?: any;
	value?: any;
	inputType?:
		| "text"
		| "email"
		| "button"
		| "checkbox"
		| "submit"
		| "date"
		| "reset";
	label?: string;
}

export const Input = ({
	inputType = "text",
	label,
	...otherProps
}: InputProps) => {
	const input = (
		<>
			{label ? <Label text={label} /> : false}
			<input type={inputType} {...otherProps} />
		</>
	);

	if (inputType === "date") {
		// TODO: ADD DATEPICKER
		// return
	}

	return input;
};
