import classNames from "classnames";
import React from "react";
import { FaHome } from "react-icons/fa";

import * as styles from "./bottomTabBar.module.scss";

type itemPropsType = {
	isActive?: boolean;
	icon: JSX.Element;
	tabName: string;
};

export const BottomTabBarItem = ({
	isActive = false,
	icon,
	tabName,
}: itemPropsType): JSX.Element => {
	return (
		<>
			<div
				className={classNames(
					"column has-text-centered",
					styles.bottomTabBarItem,
					{ [styles.active]: isActive }
				)}
				onClick={() => {
					console.log(`click ${tabName}`);
				}}
			>
				<div className="block mb-1">
					<span className="icon">{icon}</span>
				</div>
				<p>{tabName}</p>
			</div>
		</>
	);
};
