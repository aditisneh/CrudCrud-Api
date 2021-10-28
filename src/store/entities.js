import { combineReducers } from "redux";
import itemsReducer from "./itemsDux";

export default combineReducers({
  items: itemsReducer,

});