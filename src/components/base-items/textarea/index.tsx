import * as React from "react";

import { Label } from "../label";

import "./style.scss";

interface TextAreaProps {
	name: string;
	id?: string;
	disabled?: boolean;
	placeholder?: string;
	defaultValue?: string;
	rows: number;
	cols?: number;
	label?: string;
}

export const TextArea = ({ name, label, ...otherProps }: TextAreaProps) => {
	const TextArea = (
		<div className="textarea-wrapper">
			{label ? (
				<Label text={label} className="textarea-wrapper--label" />
			) : (
				false
			)}
			<textarea name={name} {...otherProps} />
		</div>
	);

	return TextArea;
};
