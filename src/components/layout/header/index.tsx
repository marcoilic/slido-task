import React from "react";

import "./style.scss";

interface HeaderProps {
	text: string | null;
}

export const Header = ({ text }: HeaderProps) => {
	return (
		<div>
			<h1 className="header-text">{text}</h1>
		</div>
	);
};
