import styled, {css} from "styled-components";

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;

    padding: 15px;

    border-top: 1px solid var(--tg-theme-hint-color);
    background-color: var(--tg-theme-bg-color);
`

export const Type = styled.span`
    font-size: 13px;
    color: var(--tg-theme-subtitle-text-color);
`

export const Article = styled.h3`
    margin-bottom: 3px;

    font-size: 20px;
    font-weight: bold;
    color: var(--tg-theme-text-color);
`

export const descriptionStyles = css`
    margin-bottom: 8px;

    font-size: 13px;
    color: var(--tg-theme-hint-color);
`

export const Price = styled.span`
    font-size: 17px;
    font-weight: 600;
    color: var(--price-color);
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-shrink: 0;
    
    width: 130px;
    height: 97px;

    border-radius: var(--border-radius);
    
    overflow: hidden;
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
`

export const noPhotoIconStyles = css`
    width: 60px;
    height: 60px;
`