import { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";

import { AppDispatch, RootState } from "../../../../store/store";
import { MAX_BARS, MAX_BEATS_MEASURE, MAX_BPM, MAX_RACKS_COUNT, MIN_BARS, MIN_BEATS_MEASURE, MIN_BPM } from "../../../../constants/consts";
import * as audioActions from "../../../../store/audio/actions";
import { showNotification } from "../../../../store/notifications/actions";

const Header: FC = () => {

    const { bpm, beatsMeasure, bars, racks } = useSelector((state: RootState) => state.audio)

    const [bpmInput, setBpmInput] = useState<number>(bpm)
    const [beatsMeasureInput, setBeatsMeasureInput] = useState<number>(beatsMeasure)
    const [barsInput, setBarsInput] = useState<number>(bars)

    const dispatch: AppDispatch = useDispatch()

    const { changeBpm, changeBeatsMeasure, changeBars } = bindActionCreators(audioActions, dispatch)

    const onBpmChange = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (isNaN(value)) return;

        setBpmInput(value)
    }
       
    const onBeatsMeasureChange = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (isNaN(value)) return;
        
        setBeatsMeasureInput(value)
    }

    const onBarsChange = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (isNaN(value)) return;
        
        setBarsInput(value)
    }

    const onBpmBlur = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (value > MAX_BPM) value = MAX_BPM
        else if (value < MIN_BPM) value = MIN_BPM 

        changeBpm(value)
        setBpmInput(value)
        showNotification({message: 'BPM limits exceeded', type: 'WARNING'})
    }

    const onBeatsMeasureBlur = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (value > MAX_BEATS_MEASURE) value = MAX_BEATS_MEASURE
        else if (value < MIN_BEATS_MEASURE) value = MIN_BEATS_MEASURE

        changeBeatsMeasure(value)
        setBeatsMeasureInput(value)
    }

    const onBarsBlur = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value 
        if (value > MAX_BARS) value = MAX_BARS
        else if (value < MIN_BARS) value = MIN_BARS

        changeBars(value)
        setBarsInput(value)
    }

    return <StyledHeader>
        
        <InfoWrapper>
            <InfoContainer>
                <InfoTitle>BPM</InfoTitle>
                <InfoInput value={bpmInput} onChange={onBpmChange} onBlur={onBpmBlur} />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Beats</InfoTitle>
                <InfoInput value={beatsMeasureInput} onChange={onBeatsMeasureChange} onBlur={onBeatsMeasureBlur} />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Bars</InfoTitle>
                <InfoInput value={barsInput} onChange={onBarsChange} onBlur={onBarsBlur} />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Racks</InfoTitle>
                <InfoValue>{racks.length}/{MAX_RACKS_COUNT}</InfoValue>
            </InfoContainer>
        </InfoWrapper>

    </StyledHeader>
}

const StyledHeader = styled.div`
    position: fixed;
    background-color: #120f16;
    background: linear-gradient(90deg, #120f16, #0e0b0f);
    width: clamp(370px, 50vw, 550px);
    height: 60px;
    margin: 30px;
    padding: 15px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const InfoContainer = styled.div`
    margin: 0 6px;
    display: flex;
    flex-direction: row;
    color: #efd9fc;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

const InfoTitle = styled.div`
    font-weight: bold;
`

const InfoValue = styled.div`
    width: 100%;
    margin-left: 12px;
`

const InfoInput = styled.input`
    border: none;
    outline: none;
    background: none;
    width: 52px;
    padding: 0 5px;
    color: #efd9fc;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Dank Mono', sans-serif;
`

export default Header