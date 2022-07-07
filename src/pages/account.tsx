import React from "react";
import { Layout } from "../components/layout/layout";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";

const AccountPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout
					appBarTitle="Account"
					hasBottomTabBar
					bottomTabBarIndex={3}
				>
					<div className="column">
						<p>Account page</p>
					</div>
					<SimpleTimeline />
				</Layout>
			</main>
		</>
	);
};

export default AccountPage;
