// imports
import { GET_QUESTIONS } from "./types";

// action creators
export const getQuestions = (data) => ({
  type: GET_QUESTIONS,
  payload: data,
});
