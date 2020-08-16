import React from "react";

// import classNames from "classnames";
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
	...otherProps
}: IconProps) => {
	return <span onClick={onClick} style={{ color: color }} className={name} />;
};
