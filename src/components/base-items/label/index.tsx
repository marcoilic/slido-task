import * as React from "react";

interface LabelProps {
	text: string;
}

export const Label = ({ text, ...otherProps }: LabelProps) => {
	const label = <span>{text}</span>;

	return label;
};
