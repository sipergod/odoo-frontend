import React from "react";
import { AppContextProvider } from "./src/components/appContext/appContext.tsx";

export function wrapRootElement({ element, props }) {
	return <AppContextProvider {...props}> {element} </AppContextProvider>;
}
