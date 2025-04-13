import styled, {css} from "styled-components";

export const Field = styled.div`
    position: relative;
`

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 8px 0 50px;

    border: 0;
    border-radius: var(--border-radius);
    background-color: #ffffff;

    font-size: 16px;

    transition: var(--transition);
    outline: 1px solid transparent;

    &:hover, &:focus {
        outline-color: var(--accent-color);
    }

    &:not(:placeholder-shown) + label,
    &:focus + label {
        opacity: 0;
    }
`

export const StyledLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 50px;

    transform: translateY(-50%);

    font-size: 16px;
    color: #DCDCDC;

    transition: var(--transition);
    pointer-events: none;
`

export const iconStyles = css`
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    
    padding-right: 6px;
    
    border-right: 1px solid #DCDCDC;
    
    fill: #DCDCDC;
    
    pointer-events: none;
    transition: var(--transition);

    ${StyledInput}:hover ~ &,
    ${StyledInput}:focus ~ & {
        border-color: var(--accent-color);
        fill: var(--accent-color);
    }
`