import React from "react";
import { Layout } from "../components/layout/layout";

const FollowUpsPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout
					hasTabBar
					hasFloatingButton
					hasBottomTabBar
					bottomTabBarIndex={2}
				>
					<div className="column">
						<p>Follow - Ups page</p>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default FollowUpsPage;
