import { combineReducers } from "@reduxjs/toolkit";
import filmReducer from "./filmReducer";

export const rootReducer = combineReducers({
    films: filmReducer
})