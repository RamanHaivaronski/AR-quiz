import axios from "axios";
import {StatActions} from "../constants/Types";

export const getChampionMastery = (summonerName) => {
    return dispatch => {
        dispatch(loadStartAction());
        axios({
            method: "get",
            url: `/api/summonerMastery/${summonerName}`,
        }).then(
            result => {
                dispatch(loadEndAction(result.data,summonerName));
            },
            error => {
                dispatch(loadErrorAction());
            }
        )
    }
};

const loadStartAction = ()=>{
    return {
        type: StatActions.LOAD_SUMMONER_MASTERY
    }
};

const loadEndAction = (payload,summonerName)=>{
    return {
        type: StatActions.LOAD_SUMMONER_MASTERY_SUCCESS,
        payload: {
            data:payload,
            summonerName
        }
    }
};

const loadErrorAction = ()=>{
    return {
        type: StatActions.LOAD_SUMMONER_MASTERY_FAIL
    }
};