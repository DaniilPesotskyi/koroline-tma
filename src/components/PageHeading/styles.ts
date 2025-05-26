import styled from "styled-components";

import {IStyledComponent} from "@/types/components";

export const StyledPageHeading = styled.div<IStyledComponent>`
    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 15px 0 15px 10px;

    ${({customStyles}) => customStyles || ""}
`

export const StyledPageHeadingTitle = styled.h2<IStyledComponent>`
    font-size: 24px;
    font-weight: 500;

    ${({customStyles}) => customStyles || ""}
`

export const StyledPageHeadingSubtitle = styled.h6<IStyledComponent>`
    font-size: 14px;
    color: var(--tg-theme-subtitle-text-color);

    ${({customStyles}) => customStyles || ""}
`