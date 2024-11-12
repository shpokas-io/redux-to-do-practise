import React from "react";

import "./index";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
