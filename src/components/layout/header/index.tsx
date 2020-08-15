import React from "react";

interface HeaderProps {
	text: string;
}

export const Header = ({ text }: HeaderProps) => {
	return (
		<div>
			<h1>{text}</h1>
		</div>
	);
};
