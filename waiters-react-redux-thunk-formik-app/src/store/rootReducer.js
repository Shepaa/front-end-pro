import {combineReducers} from "redux";
import {reducer} from "../main/store/reducer"

export const rootReducer = combineReducers({
    waiters: reducer,
})