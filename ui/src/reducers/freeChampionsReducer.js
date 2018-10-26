import { StatActions } from "../constants/Types";

const initialState = {
    Heroes: []
};

export default function freeChampionsReducer(state = {...initialState}, action) {
    switch (action.type) {
        case StatActions.LOAD_FREE_CHAMPIONS:
            return {...state,loading:true};
        case StatActions.LOAD_FREE_CHAMPIONS_SUCCESS:
            return {...state, ...action.payload,loading:false};
        case StatActions.LOAD_FREE_CHAMPIONS_FAIL:
            return {...state,loading:false};
        default:
            return state;
    }
}