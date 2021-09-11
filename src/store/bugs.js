import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let num = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++num,
        description: action.payload.description,
        assignedTo: action.payload.teamMember,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id === action.payload.id);
    },
    bugResolved: (bugs, action) => {
      bugs.map((bug) => {
        if (bug.id == action.payload.id) {
          bug.resolved = true;
          return bug;
        }
      });
    },
  },
});
export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

export const getUnsolvedBugs = createSelector(
  (state) => state.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);
