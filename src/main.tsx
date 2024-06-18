import React from "react";
import { createRoot } from "react-dom/client";
import App from "./views/App/App";

import "./views/styles/reset.less";
import "./views/styles/common.less";

const container = document.getElementById("root");

if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
