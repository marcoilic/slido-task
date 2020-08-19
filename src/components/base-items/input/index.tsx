import * as React from "react";

import { Label } from "../label";
import { DatePickerInput } from "../../items/datepicker";

import "./style.scss";

export interface InputProps {
	id?: string;
	placeholder?: string;
	defaultValue?: string;
	disabled?: boolean;
	onChange?: <T>(any) => void;
	inputType?:
		| "text"
		| "email"
		| "button"
		| "checkbox"
		| "submit"
		| "date"
		| "reset";
	label?: string;

	value?: {} | string;
	minDate?: {} | undefined;
}

export const Input = ({
	inputType = "text",
	label,
	value,
	id,
	onChange,
	minDate,
	disabled,
	...otherProps
}: InputProps) => {
	const input = (
		<div>
			{label ? <Label text={label} /> : false}
			<input
				id={id}
				disabled={disabled}
				type={inputType}
				onChange={onChange}
				{...otherProps}
			/>
		</div>
	);

	if (inputType === "date") {
		return (
			<div>
				{label ? <Label text={label} /> : false}
				<DatePickerInput
					id={id}
					value={value}
					onChange={onChange}
					minDate={minDate}
					disabled={disabled}
				/>
			</div>
		);
	} else {
		return input;
	}
};
