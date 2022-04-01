import { ActionTypes } from "../../../store/audio/actionTypes";

export interface AudioState {
    bpm: number;
    beatsMeasure: number;
    bars: number;
}

type BpmAction = {
    type: ActionTypes.SET_AUDIO_BPM
    payload: number;
}

type BeatsMeasureAction = {
    type: ActionTypes.SET_AUDIO_BEATS_MEASURE
    payload: number;
}

type BarsAction = {
    type: ActionTypes.SET_AUDIO_BARS
    payload: number;
}

export type AudioAction = BpmAction | BeatsMeasureAction | BarsAction;
