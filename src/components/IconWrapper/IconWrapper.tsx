import styled from "styled-components";

import {IStyledComponent} from "@/types/components";

const IconWrapper = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    display: inline-flex;
    align-items: center;
    
    & svg {
        fill: var(--tg-theme-text-color);
        ${({customStyles}) => customStyles || ""}
    }
`;

export default IconWrapper;