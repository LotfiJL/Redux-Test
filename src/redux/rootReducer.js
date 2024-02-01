import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IcecreamReducer from "./Icecream/IcecreamReducer";
import userReducer from "./User/userReducer";
export const rootReducer = combineReducers({
  cake: cakeReducer,
  IceCream: IcecreamReducer,
  user: userReducer,
});
