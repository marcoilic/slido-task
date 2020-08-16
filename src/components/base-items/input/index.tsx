import * as React from "react";

import { Label } from "../label";

import "./style.scss";

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
		<div className="input-wrapper">
			{label ? <Label text={label} className="input-wrapper--label" /> : false}
			<input
				type={inputType}
				className="input-wrapper--input"
				{...otherProps}
			/>
		</div>
	);

	if (inputType === "date") {
		// TODO: ADD DATEPICKER
		// return
	}

	return input;
};
