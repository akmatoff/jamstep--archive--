import { AudioAction, AudioState } from "../../types/store/audio/types";
import { ActionTypes } from "./actionTypes";

const initialState: AudioState = {
    bpm: 140,
    beatsMeasure: 4,
    bars: 4
}

const audio = (state: AudioState = initialState, action: AudioAction) => {
    switch (action.type) {
        case ActionTypes.SET_AUDIO_BPM:
            return {...state, bpm: action.payload}
        case ActionTypes.SET_AUDIO_BEATS_MEASURE:
            return {...state, beatsMeasure: action.payload}
        case ActionTypes.SET_AUDIO_BARS:
            return {...state, bars: action.payload}
        default:
            return state;
    }
}

export default audio;