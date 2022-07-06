import React from "react";
import { useEffect } from "react";
import { useApi } from "../utils/hooks/useApi";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import "bulma/css/bulma.min.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import { SimpleTimeline } from "../components/timeline/simpleTimeline";

const IndexPage = (): JSX.Element => {
	return (
		<main>
			<div className="column">
				<p>Odoo frontend</p>
			</div>
			<SimpleTimeline />
		</main>
	);
};

export default IndexPage;
