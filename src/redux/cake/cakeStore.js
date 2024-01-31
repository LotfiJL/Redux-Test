import { createStore } from "redux";
import cakeReducer from "./cakeReducer";

export const store = createStore(cakeReducer);
