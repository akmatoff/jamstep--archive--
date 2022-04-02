import React, { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { Rack } from '../../../../types/store/audioTypes'

type Props = {
    rack: Rack
}

type StyledRackCardProps = {
    rack?: Rack
}

const RackCard: FC<Props> = ({rack}: Props) => {
    const [rackTitle, setRackTitle] = useState(rack.title)

    const onTitleChange = (e: FormEvent<HTMLInputElement>) => {
        setRackTitle(e.currentTarget.value)
    }

    return (
        <StyledRackCard rack={rack}>
            <RackTitle value={rackTitle} onChange={onTitleChange} /> 
            <ButtonsContainer>
            <PlayButton />
            <RecordButton />
            </ButtonsContainer>
        </StyledRackCard> 
    )
}

export const StyledRackCard = styled.div<StyledRackCardProps>`
    width: clamp(430px, 50vw, 600px);
    height: clamp(50px, 20vw, 120px);
    background-color: #9030df;
    background: ${props => !props.rack?.isMain ? `linear-gradient(90deg, #120f16, #0e0b0f)` : `linear-gradient(160deg, #9030df 20%, #671aa5 90%);`};
    box-shadow: 15px 22px 40px rgba(16, 16, 16, 0.2);
    padding: 30px;
    border-radius: 50px;
    margin: 20px 20px;
    display: grid;
    place-items: center;
    transition: 0.4s ease-out;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    &:hover {
        background: linear-gradient(160deg, #a33ef7 20%, #671aa5 90%);
    }
`

const RackTitle = styled.input`
    width: 40%;
    padding: 10px;
    border: none;
    outline: none;
    background: none;
    color: #efd9fc;
    font-size: 20px;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const PlayButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #efd9fc;
    margin-right: 20px;
`

const RecordButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #efd9fc;

    ::content {
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 100%;
    }
`

export default RackCard;