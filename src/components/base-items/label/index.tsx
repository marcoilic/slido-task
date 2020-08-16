import * as React from "react";

interface LabelProps {
	text: string;
	className?: string;
}

export const Label = ({ text, className }: LabelProps) => {
	const label = <span className={className}>{text}</span>;

	return label;
};
