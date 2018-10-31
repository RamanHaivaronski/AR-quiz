import {TEST} from "../constants/ActionTypes";
import axios from "axios"

export const fetchQuestion = id => {
  return dispatch => {
    dispatch(fetchQuestionBegin());
    axios.get(`./api/question/${id}`)
      .then(result => {
        dispatch(fetchQuestionEnd(result.data))
      })
  }
};

export const closeQuestion = () => {
  return dispatch => {
    dispatch(closeQuestionEnd())
  }
};

export const pickAnswer = (quest, answer) => {
  return dispatch => {
    dispatch(checkAnswerBegin());
    axios.post("/api/result/", {quest, answer})
      .then(result => {
        console.log(result);
          if (result.data.status === true) {

            dispatch(checkAnswerSuccess(answer))
            document.getElementById("quest_1").attributes[3].value = "green"
          }
          else {
            dispatch(checkAnswerInvalid(answer))
              document.getElementById("quest_1").attributes[3].value = "red"
          }
          setTimeout(() => {
            dispatch(closeQuestionEnd())
          },500);
        }
      )
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

const closeQuestionEnd = () => {
  return {
    type: "CLOSE_QUESTION_END"
  }
};

const checkAnswerBegin = () => {
  return {
    type: "CHECK_ANSWER_BEGIN"
  }
};

const checkAnswerSuccess = picked => {
  return {
    type: "CHECK_ANSWER_SUCCESS",
    picked
  }
};

const checkAnswerInvalid = picked => {
  return {
    type: "CHECK_ANSWER_INVALID",
    picked
  }
};