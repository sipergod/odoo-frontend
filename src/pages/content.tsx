import React from "react";
import { Layout } from "../components/layout/layout";

const ContentPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout
					hasTabBar={true}
					hasBottomTabBar={true}
					bottomTabBarIndex={1}
				>
					<div className="column">
						<p>Content page</p>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default ContentPage;
