import classNames from "classnames";
import React, { useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppState, useAppStateDispatch } from "../appContext/AppContext";

import * as styles from "./floatButton.module.scss";

export const FloatButton = (): JSX.Element => {
  const appState = useAppState();
  const appStateDispatch = useAppStateDispatch();

  const handleToggle = useCallback(() => {
    appStateDispatch({
      type: "toggleActiveFloatPopUp",
    });
  }, [appStateDispatch]);

  return (
    <>
      <div className={classNames("mx-5 my-3", styles.floatButton)}>
        <button className="button is-primary" onClick={handleToggle}>
          <span className="icon">
            <FaPlus />
          </span>
        </button>
      </div>
    </>
  );
};
