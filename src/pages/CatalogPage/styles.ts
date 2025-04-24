import styled, {css} from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 15px 10px 5px 10px
`

export const drawerStyles = css`
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    height: 90%;
    padding: 15px 0 0 0;
    
    z-index: calc(var(--drawer-z-index) + 10);
`