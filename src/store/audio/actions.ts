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

export const changeBpm = (bpm: number) => {
    return (dispatch: Dispatch<AudioAction>) => {
        dispatch({
            type: ActionTypes.SET_AUDIO_BPM,
            payload: bpm
        })
    }
}

export const changeBeatsMeasure = (beatsMeasure: number) => {
    return (dispatch: Dispatch<AudioAction>) => {
        dispatch({
            type: ActionTypes.SET_AUDIO_BEATS_MEASURE,
            payload: beatsMeasure
        })
    }
}

export const changeBars = (bars: number) => {
    return (dispatch: Dispatch<AudioAction>) => {
        dispatch({
            type: ActionTypes.SET_AUDIO_BARS,
            payload: bars
        })
    }
}