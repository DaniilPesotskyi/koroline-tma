import styled from "styled-components";

export const StyledLoaderWrapper = styled.div`
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`

export const StyledLoaderSpinner = styled.span`
    display: block;

    width: 40px;
    height: 40px;

    border: 7px solid #eeeeee;
    border-top: 7px solid var(--accent-color);
    border-radius: 50%;
`