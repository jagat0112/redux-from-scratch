import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const configStore = () => {
  return configureStore({ reducer });
};

export default configStore;
