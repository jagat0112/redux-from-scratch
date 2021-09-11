import { combineReducers } from "redux";
import reducerBugs from "./bugs";

const reducer = combineReducers({
  bugs: reducerBugs,
});

export default reducer;
