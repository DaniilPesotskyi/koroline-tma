import styled, {css} from "styled-components";

import {IStyledComponent} from "@/types/components";

export interface StyledAlertProps extends IStyledComponent {
    variant: 'info' | 'success' | 'warning' | 'error'
}

export const StyledAlert = styled.div.withConfig({
    shouldForwardProp: (props) => props !== 'customStyles'
})<StyledAlertProps>`
    display: flex;
    align-items: start;
    gap: 4px;

    padding: 10px;

    border: 1px solid;
    border-radius: var(--border-radius);

    ${({variant}) => variant === 'success' && successStyles}
    ${({variant}) => variant === 'info' && infoStyles}
    ${({variant}) => variant === 'error' && errorStyles}
    ${({variant}) => variant === 'warning' && warningStyles}

    ${({customStyles}) => customStyles || ""}
`

const infoStyles = css`
    border-color: var(--alert-info-border-color);
    background-color: var(--alert-info-bg-color);
    color: var(--alert-info-color);

    & svg {
        fill: var(--alert-info-color);
    }
`

const successStyles = css`
    border-color: var(--alert-success-border-color);
    background-color: var(--alert-success-bg-color);
    color: var(--alert-success-color);

    & svg {
        fill: var(--alert-success-color);
    }
`

const warningStyles = css`
    border-color: var(--alert-warning-border-color);
    background-color: var(--alert-warning-bg-color);
    color: var(--alert-warning-color);

    & svg {
        fill: var(--alert-warning-color);
    }`

const errorStyles = css`
    border-color: var(--alert-error-border-color);
    background-color: var(--alert-error-bg-color);
    color: var(--alert-error-color);

    & svg {
        fill: var(--alert-error-color);
    }`