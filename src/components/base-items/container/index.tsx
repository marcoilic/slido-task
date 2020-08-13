import React from "react";
import "./style.scss";

interface ContainerProps {
	children:
		| React.ReactNode
		| Element
		| Element[]
		| JSX.Element
		| JSX.Element[]
		| string;
}

export const Container = ({ children, ...otherProps }: ContainerProps) => (
	<div className="container" {...otherProps}>
		{children}
	</div>
);
