import styled, {css} from "styled-components";

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;

    padding: 15px;

    border-top: 1px solid #E1E1E1;
    background-color: #ffffff;
`

export const Type = styled.span`
    font-size: 13px;
    color: #9D9D9D;
`

export const Article = styled.h3`
    margin-bottom: 3px;

    font-size: 20px;
    font-weight: bold;
`

export const descriptionStyles = css`
    margin-bottom: 8px;

    font-size: 13px;
    color: #575757;
`

export const Price = styled.span`
    font-size: 17px;
    font-weight: 600;
    color: var(--price-color);
`

export const Image = styled.img`
    flex-shrink: 0;

    width: 130px;
    height: 80px;

    border-radius: var(--border-radius);
    background-color: #CECECE;
`