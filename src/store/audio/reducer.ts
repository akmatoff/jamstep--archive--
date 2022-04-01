import { AudioAction, AudioState } from "../../types/store/audioTypes";
import { ActionTypes } from "./actionTypes";

export const initialState: AudioState = {
    bpm: 140,
    beatsMeasure: 4,
    bars: 4,
    racks: [
        {id: 1, isMain: true, isActive: true, isRecording: false}
    ]
}

const audio = (state: AudioState = initialState, action: AudioAction) => {
    switch (action.type) {
        case ActionTypes.SET_AUDIO_BPM:
            return {...state, bpm: action.payload}
        case ActionTypes.SET_AUDIO_BEATS_MEASURE:
            return {...state, beatsMeasure: action.payload}
        case ActionTypes.SET_AUDIO_BARS:
            return {...state, bars: action.payload}
        case ActionTypes.SET_AUDIO_RACKS:
            return {...state, racks: [...state.racks, action.payload]}
        default:
            return state;
    }
}

export default audio;