import styled, {css} from "styled-components";

export interface StyledExpandableTextTypes {
    customStyles?: ReturnType<typeof css>
}

export const StyledExpandableText = styled.p<StyledExpandableTextTypes, {open: boolean}>`
    ${({customStyles}) => customStyles || ""}
`

export const ToggleButton = styled.button<StyledExpandableTextTypes>`
    ${({customStyles}) => customStyles || ""}

    display: inline-block;

    padding: 0;

    border: none;
    background-color: transparent;

    color: #000000;
    font-style: italic;
`