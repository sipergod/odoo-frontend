import React from "react";
import { AppBar } from "../appBar/appBar";
import { BottomTabBar } from "../bottomTabBar/bottomTabBar";
import { FloatButton } from "../floatButton/floatButton";
import { TabBar } from "../tabBar/tabBar";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";

type layoutProps = {
	appBarTitle?: string;
	hasTabBar?: boolean;
	hasFloatingButton?: boolean;
	hasBottomTabBar?: boolean;
	bottomTabBarIndex: number;
	children: React.ReactNode;
};

export const Layout = ({
	appBarTitle = "",
	hasTabBar = false,
	hasFloatingButton = false,
	hasBottomTabBar = false,
	bottomTabBarIndex,
	children,
}: layoutProps): JSX.Element => {
	return (
		<>
			<AppBar
				onlySearchBar={appBarTitle === undefined || appBarTitle === ""}
				title={appBarTitle}
			/>
			{hasTabBar ? <TabBar /> : <></>}
			<div
				className="has-background-light"
				style={{
					marginTop: hasTabBar
						? "calc(5.75rem + 1px)"
						: appBarTitle === undefined || appBarTitle === ""
						? "4rem"
						: "3.25rem",
					marginBottom: hasBottomTabBar ? "4rem" : "0",
					minHeight: `calc(100vh - ${
						hasTabBar
							? "calc(5.75rem + 1px)"
							: appBarTitle === undefined || appBarTitle === ""
							? "4rem"
							: "3.25rem"
					} - ${hasBottomTabBar ? "4rem" : "0"})`,
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
