// modules
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// imports
import reducers from "./reducers/index";

// store
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
