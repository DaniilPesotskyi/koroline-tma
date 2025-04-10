import styled, {css} from "styled-components";

const IconWrapper = styled.span<{ customStyles?: ReturnType<typeof css> }>`
    display: inline-flex;
    align-items: center;

    ${({customStyles}) => customStyles || ""}
`;

export default IconWrapper;