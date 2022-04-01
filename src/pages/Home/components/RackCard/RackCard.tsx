import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Rack } from '../../../../types/store/audioTypes'

type Props = {
    rack: Rack
}

const RackCard: FC<Props> = ({rack}: Props) => {
    return (
        <StyledRackCard>
        </StyledRackCard>
    )
}

export const StyledRackCard = styled.div`
    width: clamp(430px, 50vw, 600px);
    height: clamp(50px, 20vw, 100px);
    background-color: #9030df;
    background: linear-gradient(160deg, #9030df 20%, #671aa5 90%);
    box-shadow: 15px 22px 40px rgba(16, 16, 16, 0.2);
    padding: 30px;
    border-radius: 40px;
    margin: 20px 20px;
    display: grid;
    place-items: center;
    transition: 0.4s ease-out;

    &:hover {
        background: linear-gradient(160deg, #a33ef7 20%, #671aa5 90%);
    }
`

export default RackCard;