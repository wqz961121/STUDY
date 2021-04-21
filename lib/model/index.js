import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalReducer from "./global";
var reducer = combineReducers({
  Global: globalReducer
});
var store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;