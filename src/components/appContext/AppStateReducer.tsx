import { AppState } from "./AppContext";

export type AppStateDispatch = (action: AppStateAction) => void;
export type AppStateAction = { type: "toggleActiveBurger"; value?: boolean };
export function appStateReducer(
	state: AppState,
	action: AppStateAction
): AppState {
	switch (action.type) {
		case "toggleActiveBurger":
			return toggleActiveBurger(state, action.value);

		default:
			console.error("invalid action");
			return state;
	}
}

const toggleActiveBurger = (state: AppState, value?: boolean): AppState => {
	const result = { ...state };
	if (value === undefined) {
		result.isActiveBurger = !result.isActiveBurger;
	} else {
		result.isActiveBurger = value;
	}

	return result;
};
