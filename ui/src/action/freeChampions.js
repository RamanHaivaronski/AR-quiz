import axios from "axios";
import { StatActions } from "../constants/Types";

export const getFreeChampions = () => {
    return dispatch => {
        dispatch(loadStartAction());
        axios({
            method: "get",
            url: `/api/freeChampions`,
        }).then(result => {
            dispatch(loadEndAction(result.data));
            },
            error => {
                dispatch(loadErrorAction());
            }
        )
    }
};

const loadStartAction = ()=>{
    return {
        type: StatActions.LOAD_FREE_CHAMPIONS
    }
};

const loadEndAction = (payload)=>{
    return {
        type: StatActions.LOAD_FREE_CHAMPIONS_SUCCESS,
        payload: {
            data:payload
        }
    }
};

const loadErrorAction = ()=>{
    return {
        type: StatActions.LOAD_FREE_CHAMPIONS_FAIL
    }
};