import styled from 'styled-components'
import Header from './components/Header/Header'
import Racks from './components/Racks/Racks'

export default function Home() {
    return (
        <StyledHome>
            <Racks />
        </StyledHome>
    )
}

const StyledHome = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 350px;
`