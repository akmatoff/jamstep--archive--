import { Dispatch } from "redux";
import { AudioAction, Rack } from "../../types/store/audioTypes";
import { ActionTypes } from "./actionTypes";

export const addRack = (rack: Rack) => {
    return (dispatch: Dispatch<AudioAction>) => {
        dispatch({
            type: ActionTypes.SET_AUDIO_RACKS,
            payload: rack
        })
    }
}