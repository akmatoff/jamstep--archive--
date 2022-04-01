import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import * as audioActions from "../../../../store/audio/actions";
import { AppDispatch, RootState } from "../../../../store/store";

import { StyledRackCard } from "../RackCard/RackCard";

import { MAX_RACKS_COUNT } from "../../../../constants/consts";
import { Rack } from "../../../../types/store/audioTypes";

const AddRack: FC = () => {

    const dispatch: AppDispatch = useDispatch()

    const racks = useSelector((state: RootState) => state.audio.racks)

    const lastRackId = racks[racks.length - 1].id

    const { addRack } = bindActionCreators(audioActions, dispatch)

    const newRack: Rack = {id: lastRackId + 1, isActive: true, isMain: false, isRecording: false}

    return <StyledAddRack onClick={() => racks.length < MAX_RACKS_COUNT && addRack(newRack)}>
        Add a rack
    </StyledAddRack>
}

const StyledAddRack = styled(StyledRackCard)`
    background: #120f1624;
    border: 1px solid #efd9fc44;
    box-shadow: none;
    font-size: 20px;
    cursor: pointer;
    
    &:hover {
        background: #120f166c;
    }
`

export default AddRack