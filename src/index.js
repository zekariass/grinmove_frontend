// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";
import { reduxStore } from "./reduxStore";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
