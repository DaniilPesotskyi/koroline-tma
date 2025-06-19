import styled, {css} from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    padding: 15px 10px 5px 10px
`

export const Title = styled.h1`
    font-size: 24px;
    font-style: italic;
`

// Product
export const drawerStyles = css`
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    height: 90%;
    padding: 15px 0 0 0;

    z-index: calc(var(--drawer-z-index) + 10);
`

// CartButton
export const cartButtonStyles = css`
    position: fixed;
    bottom: 20px;
    left: 20px;

    width: 50px;
    height: 50px;

    border: 1px solid var(--accent-color);
    border-radius: 50%;
    background-color: var(--tg-theme-bg-color);

    z-index: calc(var(--backdrop-z-index) - 10);
    
    & > svg {
        fill: var(--tg-theme-text-color);
    }
`

export const CartQuantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 30px;
    right: 30px;

    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: var(--accent-color);

    color: #ffffff;
`

export const NotFoundStub = styled.div`
    width: 70%;
    margin: 50px auto 0 auto;
    
    font-size: 20px;
    text-align: center;
    color: var(--tg-theme-hint-color);
`