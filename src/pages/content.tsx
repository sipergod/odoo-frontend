import React from "react";
import { useAppState } from "../components/appContext/AppContext";
import { Layout } from "../components/layout/layout";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";

const ListTabBar = ["Messages", "Files", "Pages"];

const ContentPage = (): JSX.Element => {
	const appState = useAppState();

	return (
		<>
			<main>
				<Layout
					searchPlaceHolderByTab
					listTabBar={ListTabBar}
					hasFloatingButton
					hasBottomTabBar
					bottomTabBarIndex={1}
				>
					<div className="column">
						<p>Content page</p>

						{appState.activeTab === ListTabBar[0].toLowerCase() && (
							<div className="block"></div>
						)}

						{appState.activeTab === ListTabBar[1].toLowerCase() && (
							<div className="block">
								<SimpleTimeline />
							</div>
						)}

						{appState.activeTab === ListTabBar[2].toLowerCase() && (
							<div className="block"></div>
						)}
					</div>
				</Layout>
			</main>
		</>
	);
};

export default ContentPage;
