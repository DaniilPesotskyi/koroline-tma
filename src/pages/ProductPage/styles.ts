import styled, {css} from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
`

// Gallery

export const GalleryWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 266px;
`

export const Image = styled.img`
    border-radius: var(--border-radius);
`

export const emptyIconStyles = css`
    width: 70px;
    height: 70px;
`

// Heading

export const Heading = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-rows: auto auto;
    grid-gap: 5px;
    
    padding: 15px 10px;
`

export const Article = styled.h2`
    font-size: 26px;
    font-weight: 700;
`

export const Category = styled.p`
    font-size: 14px;
    color: #9D9D9D;
`

export const Price = styled.p`
    align-self: flex-end;
    
    font-size: 20px;
    font-weight: 500;
    color: var(--price-color);
    text-align: right;
`

export const AvailableStatus = styled.p`
    font-size: 14px;
    color: #bdbdbd;
`

// Body

export const InformationBlock = styled.div`
    flex-grow: 1;
    
    height: 100%;
    padding: 15px 10px;
    
    background-color: #F8F8F8;
`

export const InformationLabel = styled.h3`
    margin: 0 0 5px 10px;

    font-size: 13px;
    font-weight: 400;
    color: #adadad;
`

export const InformationText = styled.p`
    margin-bottom: 15px;
    
    font-size: 15px;
    color: #5C5C5C;
`

// Order