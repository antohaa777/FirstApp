import './App.css'
import styled, {isStyledComponent} from "styled-components";
import {StyledBtn} from "./components/Button.styled.tsx";
import { StyledLink } from './components/StyledLink.styled.tsx';
import {myTheme} from "./styles/There.styled.tsx";

function App() {
    return (
        <div className="App">

            <Box>
                <StyledBtn color={myTheme.colors.primary}primary active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} outlined>Hello</StyledBtn>
            </Box>
        </div>
    )
}

export default App


const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${StyledLink} {
        cursor: zoom-in;
    }

    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`
