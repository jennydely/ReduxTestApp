import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import events from "./events";

export default combineReducers({ events, visibilityFilter });
