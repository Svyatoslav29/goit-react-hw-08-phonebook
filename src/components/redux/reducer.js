import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";
import initialContacts from "../contacts.json";

const items = createReducer(initialContacts, {
    [actions.addContacts]: (state, { payload }) => [...state, payload],
    [actions.deleteContacts]: (state, { payload }) => state.filter(({id}) => id !== payload),
})

const filter = createReducer("", {
    [actions.filterChange]: (_, { payload}) => payload,
})

export default combineReducers({
    items,
    filter
})