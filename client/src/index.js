import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./slices";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  console.log("ENV...", process.env);
});
const render = (Root) => {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById("root")
  );
};

App.initialize(store, () => render(App));
