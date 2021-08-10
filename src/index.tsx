import {GlobalStyle} from './globalStyles'
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import { Provider } from 'react-redux'
import { store } from "./store/index"

ReactDOM.render(
<Provider store={store}>
    <App />
    <GlobalStyle />
</Provider>, document.querySelector("#root"));
