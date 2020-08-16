import * as React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./style.scss";

interface ButtonProps {
	buttonType?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
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
	className,
	buttonType = "button",
	onClick,
	disabled = false,
	to,
	children,
}: ButtonProps) => {
	const button = (
		<button
			className={classNames("button", className)}
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
