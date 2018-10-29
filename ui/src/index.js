/**
 * Created by Denis on 23.04.2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import axiosInterceptors from "./util/interceptors"
import {fetchQuestion} from "./action/questActions";
import QuestContainer from "./container/QuestContainer";

const rootElement = document.getElementById("app");
window.store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
window.actions = {
  fetchQuest: fetchQuestion
};
axiosInterceptors();



ReactDOM.render(
<Provider store={store}>
  <QuestContainer/>
</Provider>,
rootElement
);