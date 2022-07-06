import { AppState, AppStateInitParams } from "./AppContext";

export function initAppState(initParams?: AppStateInitParams): AppState {
	const authentication = initParams?.authentication ?? {
		client_id: "",
		client_secret: "",
	};
	const isActiveBurger = initParams?.isActiveBurger ?? false;

	return {
		authentication,
		isActiveBurger,
	};
}
