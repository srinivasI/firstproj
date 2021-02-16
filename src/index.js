import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";
import App from "./App";


const rootElement = document.getElementById("srini");
ReactDOM.render(
    <App />,
  rootElement
);