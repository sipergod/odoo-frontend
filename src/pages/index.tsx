import React from "react";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";
import { Layout } from "../components/layout/layout";
import { useAppState } from "../components/appContext/AppContext";

const ListTabBar = ["All clients", "Team", "Groups"];

const IndexPage = (): JSX.Element => {
	const appState = useAppState();

	return (
		<>
			<main>
				<Layout
					searchPlaceHolder={`clients & phonebook...`}
					listTabBar={ListTabBar}
					hasFloatingButton
					hasBottomTabBar
					bottomTabBarIndex={0}
				>
					<div className="column">
						<p>Odoo frontend {appState.activeTab}</p>
					</div>

					{appState.activeTab === ListTabBar[0].toLowerCase() && (
						<div className="block">
							<SimpleTimeline />
						</div>
					)}

					{appState.activeTab === ListTabBar[1].toLowerCase() && (
						<div className="block"></div>
					)}

					{appState.activeTab === ListTabBar[2].toLowerCase() && (
						<div className="block"></div>
					)}
				</Layout>
			</main>
		</>
	);
};

export default IndexPage;
