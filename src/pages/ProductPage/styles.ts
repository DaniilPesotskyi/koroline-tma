import styled, {css} from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
`

// Before

export const NoProductFoundBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    width: 85%;
    height: 100%;
    margin: 0 auto;
    
    font-size: 20px;
    text-align: center;
`

export const noProductFoundIconStyles = css`
    width: 60px;
    height: 60px;
`

// Gallery

export const GalleryWrap = styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    
    min-height: 266px;
`

export const Image = styled.img`
    border-radius: var(--border-radius);
`

export const galleryLoaderStyles = css`
    position: relative;
    bottom: 0;
`

export const NoImageWrapper = styled.div`
    margin: 0 auto;
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

export const orderBackdropStyles = css`
    z-index: calc(var(--drawer-z-index) + 14);
`

export const orderDrawerStyles = css`
    height: 70%;
    padding: 0;
    
    background-color: #F8F8F8;

    z-index: calc(var(--drawer-z-index) + 15);

`

export const OrderHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 60px;
    
    background-color: #ffffff;
    
    font-size: 20px;
`

export const OrderBody = styled.div`
    padding: 15px 0 30px 0;
`

export const OrderOptionLabel = styled.p`
    margin: 0 0 10px 20px;
    
    font-size: 15px;
    color: #808080;
`

export const orderOptionsStyles = css`
    padding: 0 10px;
    margin-bottom: 20px;
`

export const orderOptionStyles = css`
    padding: 10px 18px;
    
    font-size: 18px;
`