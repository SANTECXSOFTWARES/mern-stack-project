import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./slices";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import theme from './util/theme'
import { ThemeProvider } from "@mui/material";

const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  console.log("ENV...", process.env);
});
const render = (Root) => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Root />
      </ThemeProvider>
    </Provider>,
    document.getElementById("root")
  );
};

App.initialize(store, () => render(App));
