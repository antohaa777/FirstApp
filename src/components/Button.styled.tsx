import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
    primary?: boolean;
    outlined?: boolean;
    active?: boolean;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;


    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#fb3f78"};;
        color: ${props => props.color || "#fb3f78"};
        background-color: transparent;

        &:hover {
            border-color: #0d57aa;
            color: #0d57aa;
            background-color: transparent;
        }
    `}

    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#fb3f78"};
        color: snow;

        &:hover {
            background-color: #0d57aa;
        }
    `}
     ${props =>props.active && css<StyledBtnPropsType>`
         box-shadow: 5px 5px 5px 5px rgba(13, 87, 170, 0.38);
     `}
`