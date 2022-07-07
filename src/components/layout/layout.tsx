import React from "react";
import { AppBar } from "../appBar/appBar";
import { BottomTabBar } from "../bottomTabBar/bottomTabBar";
import { FloatButton } from "../floatButton/floatButton";
import { TabBar } from "../tabBar/tabBar";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";

type layoutProps = {
	hasTabBar?: boolean;
	hasFloatingButton?: boolean;
	hasBottomTabBar?: boolean;
	bottomTabBarIndex: number;
	children: React.ReactNode;
};

export const Layout = ({
	hasTabBar = false,
	hasFloatingButton = false,
	hasBottomTabBar = false,
	bottomTabBarIndex,
	children,
}: layoutProps): JSX.Element => {
	return (
		<>
			<AppBar />
			{hasTabBar ? <TabBar /> : <></>}
			<div
				style={{
					marginTop: hasTabBar ? "6rem" : "4.25rem",
					marginBottom: hasBottomTabBar ? "4.25rem" : "0",
				}}
			>
				{children}
			</div>
			{hasFloatingButton ? <FloatButton /> : <></>}
			{hasBottomTabBar ? (
				<BottomTabBar activeIndex={bottomTabBarIndex} />
			) : (
				<></>
			)}
		</>
	);
};
