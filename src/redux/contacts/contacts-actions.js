import { createAction } from "@reduxjs/toolkit";

// export const addСontact = (value) => ({
//   type: "addСontact",
//   payload: value,
// });

export const addСontact = createAction("addСontact");

// export const deleteContact = (value) => ({
//   type: "deleteContact",
//   payload: value,
// });

export const deleteContact = createAction("deleteContact");

// export const filterContact = (value) => ({
//   type: "filterContact",
//   payload: value,
// });

export const filterContact = createAction("filterContact");
