import { combineReducers } from "redux";
import reducer from "./mostrarReducers";

export default combineReducers ({info: reducer});