// mondules
import { combineReducers } from "redux";

// imports
import questionsReducer from "./questionsReducer";

const reducers = combineReducers({
  questionsReducer,
});

export default reducers;
