import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "../../redux/contacts/contacts-actions";

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "addСontact":
//       return [...state, payload];

//     case "deleteContact":
//       return state.filter((todo) => todo.id !== payload);

//     default:
//       return state;
//   }
// };

const itemsReducer = createReducer([], {
  [actions.addСontact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
});

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "filterContact":
//       return payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("", {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
