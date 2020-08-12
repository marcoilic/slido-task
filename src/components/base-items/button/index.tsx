import * as React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

interface ButtonProps {
	buttonType?: "button" | "submit" | "reset";
	onClick: () => void;
	disabled: boolean;
	to?: string;
	children:
		| React.ReactNode
		| Element
		| Element[]
		| JSX.Element
		| JSX.Element[]
		| string;
}

export const Button = ({
	buttonType = "button",
	onClick,
	disabled,
	to,
	children,
}: ButtonProps) => {
	const button = (
		<button
			className="buttontest"
			type={buttonType}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);

	if (to) {
		return <Link to={to}>{button}</Link>;
	}

	return button;
};
