import { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";

import { AppDispatch, RootState } from "../../../../store/store";
import { MAX_BARS, MAX_BEATS_MEASURE, MAX_BPM, MAX_RACKS_COUNT, MIN_BARS, MIN_BPM } from "../../../../constants/consts";
import * as audioActions from "../../../../store/audio/actions";

const Header: FC = () => {
    const { bpm, bars, beatsMeasure, racks } = useSelector((state: RootState) => state.audio)

    const dispatch: AppDispatch = useDispatch()

    const { changeBpm, changeBeatsMeasure, changeBars } = bindActionCreators(audioActions, dispatch)

    const onBpmChange = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (isNaN(value) ||
            value > MAX_BPM ||
            value < MIN_BPM) return;

        changeBpm(value)
    }

    const onBeatsMeasureChange = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (isNaN(value) ||
            value > MAX_BEATS_MEASURE ||
            value < MAX_BEATS_MEASURE) return;
        
        changeBeatsMeasure(value)
    }

    const onBarsChange = (e: FormEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        if (isNaN(value) ||
            value > MAX_BARS ||
            value < MIN_BARS) return;
        
        changeBars(value)
    }

    return <StyledHeader>
        
        <InfoWrapper>
            <InfoContainer>
                <InfoTitle>BPM</InfoTitle>
                <InfoInput value={bpm} onChange={onBpmChange} />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Beats Measure</InfoTitle>
                <InfoInput value={beatsMeasure} onChange={onBeatsMeasureChange} />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Bars</InfoTitle>
                <InfoInput value={bars} onChange={onBarsChange} />
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
    width: clamp(460px, 50vw, 550px);
    height: 60px;
    margin: 30px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const InfoContainer = styled.div`
    margin: 0 8px;
    display: flex;
    flex-direction: row;
    color: #efd9fc;
    cursor: pointer;
    user-select: none;
`

const InfoTitle = styled.div`
    font-weight: bold;
`

const InfoValue = styled.div`
    margin-left: 5px;
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