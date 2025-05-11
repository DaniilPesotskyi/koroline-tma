// Filters

import styled, {css} from "styled-components";

export const FilterList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    
    padding: 0 10px;
    
    overflow: auto;
`

// Button

export const StyledFilterButton = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    
    padding: 5px 10px;

    border: 1px solid #E1E1E1;
    border-radius: var(--border-radius);
    background-color: transparent;

    font-size: 16px;
    color: #5b5b5b;
`

export const deleteIconStyles = css`
    width: 20px;
    height: 20px;
    
    fill: #A50000;
`

// Picker

export const drawerStyles = css`
    display: flex;
    flex-direction: column;
    
    height: 90%;
    padding: 0;
    
    background-color: #f1f1f1;
`

export const PickerHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    height: 60px;
    
    background-color: #ffffff;
    
    font-size: 20px;
`

export const PickerSubtitle = styled.span`
    font-size: 14px;
    color: #bdbdbd;
`

export const PickerList = styled.ul`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    gap: 3px;
    
    height: 100%;
    padding: 10px;
    
    overflow-y: auto;
`

export const PickerButton = styled.button<{active: boolean}>`
    position: relative;
    
    flex-shrink: 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 50px;
    padding: 0 10px 0 20px;
    
    border: 0;
    border-radius: var(--border-radius);
    background-color: #ffffff;
    
    font-size: 16px;
    color: #000000;

    opacity: ${({ disabled }) => (disabled ? 0.3 : 3)};
    
    ${({active}) => active && css`
        outline: 1px solid var(--accent-color);
        
        color: var(--accent-color);
    `};
    
    &::after {
        content: ' ';
        
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        
        width: 20px;
        height: 20px;
        
        border-radius: 50%;
        background-color: ${({active}) => active ? 'var(--accent-color)' : 'transparent'};
    }
    
    ${({disabled}) => disabled && css`
        &::before {
            content: 'недоступний';
            
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            
            color: #A80000;
        }
    `}
`