import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../../../store/store";
import { Rack } from "../../../../types/store/audioTypes";
import AddRack from "../AddRack/AddRack";

import RackCard from "../RackCard/RackCard";

const Racks: FC = () => {
    const racks = useSelector((state: RootState) => state.audio.racks)

    return <StyledRacks>
        {racks.map((rack: Rack) => <RackCard key={rack.id} rack={rack} />)}
        <AddRack />
    </StyledRacks>
}

const StyledRacks = styled.div`
    width: clamp(400px, 50vw, 950px);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Racks