import * as React from "react";
import classNames from "classnames";

import "./style.scss";

interface LabelProps {
	text: string;
	className?: string;
}

export const Label = ({ text, className }: LabelProps) => {
	const label = (
		<span className={classNames("label-item", className)}>{text}</span>
	);

	return label;
};
