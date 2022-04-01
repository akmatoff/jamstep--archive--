import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import * as audioActions from "../../../../store/audio/actions";
import { AppDispatch, RootState } from "../../../../store/store";

import { StyledRackCard } from "../RackCard/RackCard";

const AddRack: FC = () => {
    const dispatch: AppDispatch = useDispatch()

    const lastRackId = useSelector((state: RootState) => state.audio.racks[state.audio.racks.length - 1].id)

    const { addRack } = bindActionCreators(audioActions, dispatch)

    return <StyledAddRack onClick={() => addRack({id: lastRackId + 1, isActive: true, isMain: false, isRecording: false})}>
        Add a rack
    </StyledAddRack>
}

const StyledAddRack = styled(StyledRackCard)`
    background: #120f1624;
    border: 1px solid #efd9fc44;
    box-shadow: none;
    cursor: pointer;
    
    &:hover {
        background: #120f166c;
    }
`

export default AddRack