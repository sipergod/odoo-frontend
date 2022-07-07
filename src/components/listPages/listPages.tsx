import classNames from "classnames";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ImArrowDownRight2 } from "react-icons/im";

import * as styles from "./listPages.module.scss";

const dummyList: any[] = [];
const emptyDummyList: any[] = [];

export const ListPages = (): JSX.Element => {
	return (
		<>
			{emptyDummyList && emptyDummyList.length === 0 && (
				<div className="column is-6 is-offset-3 has-text-centered">
					<div className="block mb-1">
						<IoDocumentTextOutline
							className={styles.introIcon}
							size={50}
						/>

						<h1 className={styles.title}>COMING SOON!</h1>
						<p>
							You'll soon be able to create and manage your Pages
							from Privyr web.
							<br />
							In the meantime, please use the Privyr mobile app to
							manage, send, and track your Pages.
						</p>
					</div>
				</div>
			)}

			{dummyList &&
				dummyList.length > 0 &&
				dummyList.map((item, index) => (
					<div
						key={index}
						className="column has-background-white my-1"
					>
						<div className="columns is-mobile m-0">
							<div className="column is-3">
								<figure className="image">
									<img src="https://bulma.io/images/placeholders/128x128.png" />
								</figure>
							</div>
							<div className="column is-9">
								<p className={classNames("mb-1", styles.title)}>
									text {index}
								</p>
								<p className={classNames("my-3")}>
									Privyr support WhatsApp line. Feel free to
									message with any questions or feedback
								</p>
								<p
									className={classNames(
										"has-text-grey-light mt-3"
									)}
								>
									<ImArrowDownRight2 className="mr-2" />
									Jul 06 - 09:35 AM
								</p>
							</div>
						</div>
					</div>
				))}
		</>
	);
};
