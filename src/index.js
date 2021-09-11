import configStore from "./store/configStore";
import { bugAdded, bugResolved, getUnsolvedBugs } from "./store/bugs";

const store = configStore();
const unsubscribe = store.subscribe(() =>
  console.log("Store Changed!", store.getState())
);

store.dispatch(bugAdded({ description: "bug 1", teamMember: "Jagat Pradhan" }));
store.dispatch(bugAdded({ description: "bug 2", teamMember: "Bibendra Rai" }));
store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(removeBug(1));

console.log(getUnsolvedBugs(store.getState()));
