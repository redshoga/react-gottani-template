import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/global.scss";
import { App } from "./router";
import * as serviceWorker from "./serviceWorker";
import { validateEnviroments } from "./enviroments";

ReactDOM.render(<App />, document.getElementById("root"));

validateEnviroments();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
