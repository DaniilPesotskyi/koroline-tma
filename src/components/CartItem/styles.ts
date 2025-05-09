import styled, {css} from "styled-components";

export const StyledWrap = styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    
    margin-bottom: 10px;

    border-radius: var(--border-radius);
    background-color: #ffffff;
    
    overflow: hidden;
`

export const deleteButtonStyles = css`
    position: absolute;
    top: 10px;
    right: 10px;
`

export const deleteIconStyles = css`
    fill: var(--price-color);
`

export const Image = styled.img`
    flex-shrink: 0;

    width: 81px;
    height: 108px;

    background-color: #cbcbcb;
`

export const InformationBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    width: 100%;
    padding: 10px;
`

export const Article = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #000000;
`

export const Category = styled.p`
    font-size: 13px;
    color: #9D9D9D;
`

export const VariantWrap = styled.div`
    display: flex;
    align-items: end;
`

export const VariantInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export const VariantInfoItem = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    
    font-size: 13px;
    font-weight: 400;
    color: #8D8D8D;
`

export const iconStyles = css`
    width: 18px;
    height: 18px;
`

export const QuantityPicker = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    
    width: fit-content;
    margin-left: auto;
`

export const quantityPickerButtonStyles = css`
    width: 30px;
    height: 30px;

    background-color: #e8e8e8;
`

export const QuantityPickerValue = styled.span`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 35px;
    height: auto;
`

export const Price = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left: 10px;
    
    font-size: 20px;
    color: var(--price-color);
`