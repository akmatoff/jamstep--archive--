import { FC } from "react";
import styled from "styled-components";

import RackCard from "../RackCard/RackCard";

const Racks: FC = () => {
    return <StyledRacks>
        <RackCard>TEST</RackCard>
        <RackCard>TEST</RackCard>
        <RackCard>TEST</RackCard>
        <RackCard>TEST</RackCard>
        <RackCard>TEST</RackCard>
        <RackCard>TEST</RackCard>
    </StyledRacks>
}

const StyledRacks = styled.div`
    width: clamp(400px, 50vw, 950px);
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export default Racks