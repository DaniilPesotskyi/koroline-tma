import styled from "styled-components";

import {IStyledComponent} from "@/types/components";

const IconWrapper = styled.span<IStyledComponent>`
    display: inline-flex;
    align-items: center;

    ${({customStyles}) => customStyles || ""}
`;

export default IconWrapper;