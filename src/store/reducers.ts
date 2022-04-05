import { combineReducers } from "redux";
import audioReducer from "./audio/reducer";
import notificationReducer from './notifications/reducer';

const reducers = combineReducers({
    audio: audioReducer,
    notification: notificationReducer
})

export default reducers