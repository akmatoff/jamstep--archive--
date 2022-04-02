import { ActionTypes } from '../../store/audio/actionTypes'

export interface Rack {
    id: number;
    title: string;
    isActive: boolean;
    isMain: boolean;
    isRecording: boolean;
}

export interface AudioState {
    bpm: number;
    beatsMeasure: number;
    bars: number;
    racks: Rack[];
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

type RacksAction = {
    type: ActionTypes.SET_AUDIO_RACKS,
    payload: Rack;
}

export type AudioAction = 
    BpmAction | 
    BeatsMeasureAction | 
    BarsAction |
    RacksAction;
