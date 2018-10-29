/**
 * Created by Denis on 23.04.2018.
 */
import {combineReducers} from 'redux';
import testReducer from "../reducers/testReducer"
import questionReducer from "./questionReducer";


const appReducer = combineReducers({questData:questionReducer});

export default (state, action) => {
  return appReducer(state, action);
}