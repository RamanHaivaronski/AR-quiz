import { StatActions } from "../constants/Types";

const initialState = {
    Mastery: []
};

export default function championMasteryReducer(state = {...initialState}, action) {
    switch (action.type) {
        case StatActions.LOAD_SUMMONER_MASTERY:
            return {...state,loading:true};
        case StatActions.LOAD_SUMMONER_MASTERY_SUCCESS:
            return {...state, ...action.payload,loading:false};
        case StatActions.LOAD_SUMMONER_MASTERY_FAIL:
            return {...state,loading:false};
        default:
            return state;
    }
}