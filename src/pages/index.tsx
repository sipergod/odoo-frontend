import React from "react";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";
import { Layout } from "../components/layout/layout";

const IndexPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout
					hasTabBar
					hasFloatingButton
					hasBottomTabBar
					bottomTabBarIndex={0}
				>
					<div className="column">
						<p>Odoo frontend</p>
					</div>
					<SimpleTimeline />
				</Layout>
			</main>
		</>
	);
};

export default IndexPage;
