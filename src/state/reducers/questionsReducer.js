// imports
import { GET_QUESTIONS } from "../actions/types";

// reducers
const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default questionsReducer;
