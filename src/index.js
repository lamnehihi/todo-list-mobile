import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const todos = ["Go to market", "Buy food", "Make dinner"];
const lists = [];
for (var todo of todos) {
  let list = <li>{todo}</li>;
  lists.push(list);
}
const App = React.createElement("ul", null, ...lists);
const root = document.getElementById("root");
ReactDOM.render(App, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
