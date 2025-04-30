import styled from "styled-components";
import {IStyledComponent} from "@/types/components";

export const StyledList = styled.ul.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    display: flex;
    flex-direction: column;

    ${({customStyles}) => customStyles || ""}
`