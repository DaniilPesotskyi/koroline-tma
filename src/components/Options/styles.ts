import styled, {css} from "styled-components";
import {IStyledComponent} from "@/types/components";

export interface IStyledOption extends IStyledComponent {
    active?: boolean
}

export const StyledOptions = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    display: flex;
    align-items: center;
    gap: 5px;

    overflow: auto;

    ${({customStyles}) => customStyles || ""}
`

export const StyledOption = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledOption>`
    flex-shrink: 0;

    padding: 6px 10px;

    border: 1px solid var(--tg-theme-hint-color);
    border-radius: var(--border-radius);

    font-size: 15px;
    color: var(--tg-theme-text-color);

    ${({customStyles}) => customStyles || ""}

    ${({active}) => active &&
            css`
                border-color: var(--accent-color);
                background-color: var(--accent-color);

                color: #ffffff;
            `
    }
`