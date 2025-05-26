import styled, {css} from "styled-components";

import {NavLink} from "react-router-dom";

export const wrapperStyles = css`
    width: 70%;
    padding: 20px 10px;
`

export const toggleButtonStyles = (open: boolean) => css`
  background-color: var(--tg-theme-bg-color);
  z-index: ${open
    ? 'calc(var(--backdrop-z-index) + 1)'
    : 'auto'};
`

export const Heading = styled.h2`
    font-size: 24px;
    font-weight: 700;
    
    margin-bottom: 20px;
`

export const Title = styled.h3`
    padding-left: 10px;
    margin-bottom: 5px;
    
    font-size: 16px;
    font-weight: 600;
`

export const SubTitle = styled.h4`
    margin: 0 0 10px 15px;
    
    font-size: 13px;
    font-weight: 500;
    color: var(--tg-theme-subtitle-text-color);
`

// Nav

export const navListStyles = css`
    margin-bottom: 10px;
`

export const NavigationLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    
    padding: 12px 18px;

    border-radius: var(--border-radius);

    font-size: 18px;

    &.active {
        background-color: var(--accent-color);

        color: #ffffff;

        & svg {
            fill: #ffffff;
        }
    }
`

// Contacts

export const contactsListStyles = css`
    gap: 5px;
    
    margin-bottom: 15px;

`

export const StyledLink = styled.a`
    display: block;
    margin-left: 30px;
    
    font-size: 15px;
`

//

export const StyledLoveText = styled.p`
    margin-top: 50px;

    font-size: 13px;
    text-align: center;

    color: #808080;
`