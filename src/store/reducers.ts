import { Action, combineReducers } from "redux";
import audioReducer from "./audio/reducer";

const reducers = combineReducers({
    audio: audioReducer
})

export default reducers