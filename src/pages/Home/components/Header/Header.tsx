import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../../../store/store";
import { MAX_RACKS_COUNT } from "../../../../constants/consts";

const Header: FC = () => {
    const { bpm, bars, beatsMeasure, racks } = useSelector((state: RootState) => state.audio)

    return <StyledHeader>
        
        <InfoWrapper>
            <InfoContainer>
                <InfoTitle>BPM</InfoTitle>
                <InfoValue>{bpm}</InfoValue>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Beats Measure</InfoTitle>
                <InfoValue>{beatsMeasure}</InfoValue>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Bars</InfoTitle>
                <InfoValue>{bars}</InfoValue>
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
    width: clamp(460px, 50vw, 500px);
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
    margin: 0 12px;
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
    margin-left: 10px;
`

export default Header