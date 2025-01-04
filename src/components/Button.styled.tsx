import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.tsx";

export const StyledBtn =styled.button`
    border: none;
    background-color: #fb3f78;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #0d57aa;
    }

    &:last-child {
        background-color: #79ef8c;
    }
`

export const SuperButton =styled(StyledBtn)`
    border-radius: 5px;
    background-color: #ffe869;
    color: darkgrey;
    
    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
    
`