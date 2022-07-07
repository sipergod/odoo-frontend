import classNames from "classnames";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

import * as styles from "./appBar.module.scss";

type appBarProps = {
	onlySearchBar?: boolean;
	title: string;
};

export const AppBar = ({
	onlySearchBar = true,
	title,
}: appBarProps): JSX.Element => {
	const searchRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<nav
				className={classNames("navbar is-fixed-top", styles.navbar)}
				role="navigation"
				aria-label="main navigation"
			>
				{/* <div className="navbar-brand">
					<a className="navbar-item" href="https://bulma.io">
						<img
							src="https://bulma.io/images/bulma-logo.png"
							width="112"
							height="28"
						/>
					</a>

					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div> */}

				<div className={classNames("navbar-start", styles.navbarStart)}>
					<div className="column has-text-centered">
						{onlySearchBar ? (
							<div className="control is-expanded has-icons-left">
								<input
									className="input"
									type="text"
									placeholder="Search"
									ref={searchRef}
								/>
								<span className="icon is-small is-left">
									<FaSearch />
								</span>
							</div>
						) : (
							<>
								<h1>{title}</h1>
							</>
						)}
					</div>
				</div>

				{/* <div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item">Home</a>

						<a className="navbar-item">Documentation</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">More</a>

							<div className="navbar-dropdown">
								<a className="navbar-item">About</a>
								<a className="navbar-item">Jobs</a>
								<a className="navbar-item">Contact</a>
								<hr className="navbar-divider" />
								<a className="navbar-item">Report an issue</a>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-primary">
									<strong>Sign up</strong>
								</a>
								<a className="button is-light">Log in</a>
							</div>
						</div>
					</div>
				</div> */}
			</nav>
		</>
	);
};
