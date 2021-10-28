import { combineReducers } from "redux";
import entitiesReducers from "./entities";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default combineReducers({
  entities: entitiesReducers,

});