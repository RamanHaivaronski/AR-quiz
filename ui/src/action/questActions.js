import {TEST} from "../constants/ActionTypes";
import axios from "axios"

export const fetchQuestion = (id) => {
  return dispatch => {
    dispatch(fetchQuestionBegin());
    axios.get(`./api/question/${id}`)
      .then(result => {
        dispatch(fetchQuestionEnd(result.data))
      })
  }
};


const fetchQuestionBegin = () => {
  return {
    type: "FETCH_QUESTION_BEGIN"
  }
};

const fetchQuestionEnd = (question) => {
  return {
    type: "FETCH_QUESTION_END",
    payload: question
  }
};