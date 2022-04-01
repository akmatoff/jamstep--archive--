import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
    children?: ReactNode
}

const RackCard: FC<Props> = ({children}: Props) => {
    return (
        <StyledRackCard>
            {children}
        </StyledRackCard>
    )
}

const StyledRackCard = styled.div`
    width: clamp(120px, 30vw, 250px);
    height: 320px;
    background-color: #363535;
    color: #d3d2d2;
    padding: 30px;
    font-size: 24px;
    border-radius: 20px;
    margin: 20px 20px;
    display: grid;
    place-items: center;
`

export default RackCard;