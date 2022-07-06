import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";
import { BottomTabBar } from "../components/bottomTabBar/bottomTabBar";

const IndexPage = (): JSX.Element => {
	return (
		<main>
			<div className="column">
				<p>Odoo frontend</p>
			</div>
			<SimpleTimeline />
			<BottomTabBar activeIndex={0} />
		</main>
	);
};

export default IndexPage;
