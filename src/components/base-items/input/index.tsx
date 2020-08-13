import * as React from "react";

import { Label } from "../label";

// import "./style.scss";

interface InputProps {
	id?: string;
	placeholder?: string;
	defaultValue?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler;
	inputType?: "text" | "email" | "button" | "checkbox" | "submit" | "reset";
	// label?: string;
}

// TODO: optional label

export const Input = ({ inputType = "text", ...otherProps }: InputProps) => {
	const input = (
		<>
			<Label text="Name test" />
			<input type={inputType} {...otherProps} />
		</>
	);

	return input;
};
