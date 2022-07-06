import React from "react";
import { AppBar } from "../appBar/appBar";
import { BottomTabBar } from "../bottomTabBar/bottomTabBar";
import { FloatButton } from "../floatButton/floatButton";
import { TabBar } from "../tabBar/tabBar";

type layoutProps = {
	children: React.ReactNode;
};

export const Layout = ({ children }: layoutProps): JSX.Element => {
	return (
		<>
			<AppBar />
			<TabBar />
			<div style={{ marginTop: "6rem", marginBottom: "4.25rem" }}>
				{children}
			</div>
			<FloatButton />
			<BottomTabBar activeIndex={0} />
		</>
	);
};
