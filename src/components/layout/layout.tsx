import React, { useEffect } from "react";
import { AppBar } from "../appBar/appBar";
import { BottomTabBar } from "../bottomTabBar/bottomTabBar";
import { FloatButton } from "../floatButton/floatButton";
import { TabBar } from "../tabBar/tabBar";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import { useAppState, useAppStateDispatch } from "../appContext/AppContext";

type layoutProps = {
	appBarTitle?: string;
	searchPlaceHolder?: string;
	searchPlaceHolderByTab?: boolean;
	listTabBar?: string[];
	activeTabIndex?: number;
	hasFloatingButton?: boolean;
	hasBottomTabBar?: boolean;
	bottomTabBarIndex: number;
	children: React.ReactNode;
};

export const Layout = ({
	appBarTitle = "",
	searchPlaceHolder = "",
	searchPlaceHolderByTab = false,
	listTabBar,
	activeTabIndex = 0,
	hasFloatingButton = false,
	hasBottomTabBar = false,
	bottomTabBarIndex,
	children,
}: layoutProps): JSX.Element => {
	const appState = useAppState();
	const appStateDispatch = useAppStateDispatch();

	useEffect(() => {
		if (!listTabBar || listTabBar.length === 0) {
			appStateDispatch({
				type: "setTabActive",
			});
		}
	}, [listTabBar, appStateDispatch]);

	return (
		<>
			<AppBar
				onlySearchBar={appBarTitle === undefined || appBarTitle === ""}
				searchPlaceHolderByTab={searchPlaceHolderByTab}
				searchPlaceHolder={
					searchPlaceHolderByTab ? undefined : searchPlaceHolder
				}
				title={appBarTitle}
			/>
			{listTabBar && listTabBar.length > 0 ? (
				<TabBar listTab={listTabBar} activeTabIndex={activeTabIndex} />
			) : (
				<></>
			)}
			<div
				className="has-background-light"
				style={{
					marginTop:
						listTabBar && listTabBar.length > 0
							? "calc(5.75rem + 1px)"
							: appBarTitle === undefined || appBarTitle === ""
							? "4rem"
							: "3.25rem",
					marginBottom: hasBottomTabBar ? "4rem" : "0",
					minHeight: `calc(${window.innerHeight}px - ${
						listTabBar && listTabBar.length > 0
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
