import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ forceRefresh: true });

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,

  document.getElementById("root")
);
