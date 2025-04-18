import styled, {css} from "styled-components";
import {IStyledComponent} from "@/types/components";

export interface IStyledOption extends IStyledComponent {
    active?: boolean
}

export const StyledOptions = styled.div<IStyledComponent>`
    display: flex;
    align-items: center;
    gap: 5px;
    
    overflow: auto;
    
    ${({customStyles}) => customStyles || ""}
`

export const StyledOption = styled.span<IStyledOption>`
    flex-shrink: 0;
    
    padding: 6px 10px;

    border: 1px solid #DDDDDD;
    border-radius: var(--border-radius);

    font-size: 15px;
    color: #646464;

    ${({customStyles}) => customStyles || ""}

    ${({active}) => active &&
            css`
                border-color: var(--accent-color);
                background-color: var(--accent-color);

                color: #ffffff;
            `
    }
`