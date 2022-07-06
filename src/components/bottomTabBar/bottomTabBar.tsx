import React from "react";
import { BottomTabBarItem } from "./bottomTabBarItem";
import { MdGroups, MdManageAccounts } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import classNames from "classnames";

import * as styles from "./bottomTabBar.module.scss";

type barPropsType = {
	activeIndex: number;
};

const defaultIconSize = 20;

export const BottomTabBar = ({
	activeIndex = 0,
}: barPropsType): JSX.Element => {
	return (
		<>
			<div className={styles.spacer}></div>
			<div
				className={classNames(
					"box has-background-light p-0",
					styles.bottomTabBar
				)}
			>
				<div className={classNames("columns is-mobile m-0")}>
					<BottomTabBarItem
						isActive={activeIndex === 0}
						icon={<MdGroups size={defaultIconSize} />}
						tabName={"Clients"}
					/>
					<BottomTabBarItem
						isActive={activeIndex === 1}
						icon={<IoDocumentText size={defaultIconSize} />}
						tabName={"Content"}
					/>
					<BottomTabBarItem
						isActive={activeIndex === 2}
						icon={<FaCalendarCheck size={defaultIconSize} />}
						tabName={"Follow Ups"}
					/>
					<BottomTabBarItem
						isActive={activeIndex === 3}
						icon={<MdManageAccounts size={defaultIconSize} />}
						tabName={"Account"}
					/>
				</div>
			</div>
		</>
	);
};
