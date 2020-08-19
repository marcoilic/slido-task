import React from "react";
import DatePicker from "react-datepicker";

import { Label } from "../../base-items/label";

import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
	id?: string;
	onChange: any;
	disabled?: boolean;
	label?: string;
	value: any;
	minDate?: {} | undefined;
}

export const DatePickerInput = ({
	value,
	onChange,
	disabled,
	label,
	id,
	minDate,
}: DatePickerProps) => {
	return (
		<>
			{label ? <Label text={label} /> : false}
			<DatePicker
				id={id}
				selected={value}
				onChange={onChange}
				disabled={disabled}
				value={value}
				minDate={minDate}
				showTimeInput
				timeInputLabel="Time:"
				dateFormat="d/M/yyyy h:mm aa"
			/>
		</>
	);
};
