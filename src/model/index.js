import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import globalReducer from "./global";

const reducer = combineReducers({ Global: globalReducer });
const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;
