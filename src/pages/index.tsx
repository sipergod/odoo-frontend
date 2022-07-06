import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";
import { Layout } from "../components/layout/layout";

const IndexPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout>
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
