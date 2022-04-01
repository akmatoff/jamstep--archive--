import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../store/store";

const Header: FC = () => {
    const { bpm, bars, beatsMeasure } = useSelector((state: RootState) => state.audio)

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
        </InfoWrapper>

    </StyledHeader>
}

const StyledHeader = styled.div`
    position: fixed;
    background-color: #120f16;
    width: clamp(400px, 50vw, 500px);
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
    margin: 0 20px;
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