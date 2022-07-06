import classNames from "classnames";
import React from "react";
import * as styles from "./tabBar.module.scss";

export const TabBar = (): JSX.Element => {
	return (
		<>
			<div
				className={classNames(
					"tabs has-background-white",
					styles.tabBar
				)}
			>
				<ul>
					<li className="is-active">
						<a>All clients</a>
					</li>
					<li>
						<a>Group</a>
					</li>
				</ul>
			</div>
		</>
	);
};
