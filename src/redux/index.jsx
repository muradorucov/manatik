import { createStore } from "redux";
import cartListReducer from "./reducers/cartlist.reducer";

export const globalState = createStore(cartListReducer)