import {combineReducers} from 'redux';

import heroes from "./heroReducer"
import freeChampions from "./freeChampionsReducer"
import championMastery from "./championMasteryReducer"

const appReducer = combineReducers({
   heroes,freeChampions, championMastery
});

export default (state, action) => {
    return appReducer(state, action);
}