import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { App } from "./components/App";

export const store = configureStore({
  reducer: reducers,
  // middleware: applyMiddleware(thunk)
});

// const store= createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
//   color: string;
// }

// interface AppState {
//   counter: number;
// }

const element = document.getElementById("root") as HTMLElement;
const root= ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <App  />
  </Provider>
);
