import styled from "styled-components";

export const StyledErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    margin-top: 80px;
`

export const StyledErrorMessage = styled.p`
    width: fit-content;
    padding: 7px 16px;

    border: 1px solid var(--alert-error-border-color);
    border-radius: var(--border-radius);
    background-color: var(--alert-error-bg-color);
    
    color: var(--alert-error-color);
`

export const StyledSubmessage = styled.p`
    width: 80%;

    font-size: 17px;
    color: var(--tg-theme-hint-color);
    text-align: center;
`