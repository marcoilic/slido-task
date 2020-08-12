import * as React from "react";

interface TextAreaProps {
	name: string;
	id?: string;
	disabled?: boolean;
	placeholder?: string;
	defaultValue?: string;
	rows?: number;
	cols?: number;
}

export const TextArea = ({ name, ...otherProps }: TextAreaProps) => {
	const TextArea = <textarea name={name} {...otherProps} />;

	return TextArea;
};
