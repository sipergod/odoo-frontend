import classNames from "classnames";
import React from "react";
import { MdOutlineChat } from "react-icons/md";
import { ImArrowDownRight2 } from "react-icons/im";

import * as styles from "./listMessages.module.scss";
import { navigate } from "gatsby";

const dummyList: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const emptyDummyList: any[] = [];

export const ListMessages = (): JSX.Element => {
	return (
		<>
			{emptyDummyList && emptyDummyList.length === 0 && (
				<div className="column is-6 is-offset-3 has-text-centered">
					<div className="block mb-1">
						<MdOutlineChat className={styles.introIcon} size={50} />

						<h1 className={styles.title}>
							Welcome to your Messages
						</h1>
						<p>
							Create auto-personalised message templates to
							connect and follow up with your leads in seconds
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
						onClick={() => {
							navigate(`/content/messageDetail/${index}`);
						}}
					>
						<div className="columns is-mobile m-0">
							<div className="column">
								<p className={classNames("mb-1", styles.title)}>
									Example {index} - Introduction - ACME
									Residences
								</p>
								<p
									className={classNames(
										"my-3",
										styles.hidable
									)}
								>
									Hi @clientName, Thank you for your interest
									in ACME Residences. I'll send over an
									eBrochure shortly with more details on the
									project. Can I check if you're looking to
									buy for your own stay or investment
									purposes? Minh Quan Demo Company
								</p>
								<p
									className={classNames(
										"has-text-grey-light mt-3"
									)}
								>
									<ImArrowDownRight2 className="mr-2" />
									Not sent yet
								</p>
							</div>
						</div>
					</div>
				))}
		</>
	);
};
