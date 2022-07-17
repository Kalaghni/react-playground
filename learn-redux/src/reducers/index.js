import counter from "./counterReducer";
import auth from "./authReducer";
import interval from "./intervalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
  interval,
});
export default allReducers;