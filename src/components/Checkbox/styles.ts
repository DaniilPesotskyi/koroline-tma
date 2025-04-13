import styled from "styled-components";

import {IStyledComponent} from "@/types/components";

// Checkbox
export const StyledCheckboxWrap = styled.div<IStyledComponent>`
    display: flex;
    align-items: center;
    gap: 7px;
    
    ${({customStyles}) => customStyles || ""}}
`

// Label
export const StyledCheckboxLabel = styled.label<IStyledComponent>`
    font-size: 16px;

    ${({customStyles}) => customStyles || ""}}
`

// Indicator
export const StyledCheckboxIndicatorWrap = styled.div`
    position: relative;
    
    display: flex;
`

export const StyledCheckboxIndicatorInput = styled.input<IStyledComponent>`
    width: 20px;
    height: 20px;
    margin: 0;

    border-radius: var(--border-radius);
    background-color: #D9D9D9;

    appearance: none;
    transition: var(--transition);
    
    &:checked {
        background-color: var(--accent-color);
    }

    ${({customStyles}) => customStyles || ""}}
`

export const StyledCheckboxIndicator = styled.span<IStyledComponent>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 15px;
    height: 15px;
    
    pointer-events: none;

    ${({customStyles}) => customStyles || ""}}
`
