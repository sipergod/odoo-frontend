import React from "react";
import { AppBar } from "../appBar/appBar";
import { BottomTabBar } from "../bottomTabBar/bottomTabBar";
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
			<BottomTabBar activeIndex={0} />
		</>
	);
};
