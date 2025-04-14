import styled from "styled-components";

import {IStyledComponent} from "@/types/components";

export const StyledCollapse = styled.div<IStyledComponent>`
    ${({customStyles}) => customStyles || ""}
`