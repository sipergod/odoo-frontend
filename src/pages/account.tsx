import React from "react";
import { Layout } from "../components/layout/layout";

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
				</Layout>
			</main>
		</>
	);
};

export default AccountPage;
