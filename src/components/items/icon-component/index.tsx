import React from "react";

import "../../../assets/icomoon/style.css";

interface IconProps {
	name: string;
	color?: string;
	onClick?: () => void;
}

export const IconComponent = ({
	name,
	color = "black",
	onClick,
}: IconProps) => {
	return <span onClick={onClick} style={{ color: color }} className={name} />;
};
