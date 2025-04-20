import styled, {css} from "styled-components";

export interface StyledBackdropProps {
    customStyles?: ReturnType<typeof css>;
}

export const StyledBackdrop = styled.div<StyledBackdropProps>`
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    
    z-index: var(--backdrop-z-index);
    ${({customStyles}) => customStyles || ''}
`