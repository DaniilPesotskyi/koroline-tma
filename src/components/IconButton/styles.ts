import styled from "styled-components";

import {IStyledComponent} from "@/types/components";

export const StyledIconButton = styled.button<IStyledComponent>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 40px;
    height: 40px;

    border: 0;
    border-radius: var(--border-radius);

    background-color: transparent;

    ${({customStyles}) => customStyles || ""}
`