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
        dispatch(checkAnswerBegin(answer));
        axios.post("/api/result/", {quest, answer})
            .then(result => {
                    console.log(result);
                    let color = result.data.status === true ? "#98fb98" : "#f08080";
                    document.getElementById(`quest_${quest}`).attributes['entity-color'].value = color;
                    dispatch(checkAnswerEnd(result.data.status));
                    setTimeout(() => {
                        dispatch(closeQuestionEnd());
                    }, 250);
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

const checkAnswerBegin = picked => {
    return {
        type: "CHECK_ANSWER_BEGIN",
        picked
    }
};

const checkAnswerEnd = isValid => {
    return {
        type: "CHECK_ANSWER_END",
        isValid
    }
};
