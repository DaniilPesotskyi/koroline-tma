import styled, {css} from "styled-components";

export interface StyledDrawerProps {
    position: "left" | "right" | "top" | "bottom";
    customStyles?: ReturnType<typeof css>;
}

export const StyledDrawer = styled.div<StyledDrawerProps>`
    position: fixed;
    
    padding: 15px;
    
    background-color: #fff;
    
    z-index: var(--drawer-z-index);

    ${({position}) => {
        switch (position) {
            case "left":
                return css`
                    top: 0;
                    left: 0;
                    height: 100dvh;
                `;
            case "right":
                return css`
                    top: 0;
                    right: 0;
                    height: 100dvh;
                `;
            case "top":
                return css`
                    top: 0;
                    left: 0;
                    right: 0;
                `;
            case "bottom":
                return css`
                    bottom: 0;
                    left: 0;
                    right: 0;
                `;
            default:
                return css`
                    top: 0;
                    left: 0;
                `;
        }
    }}
    ${({customStyles}: StyledDrawerProps) => customStyles || ""}
`;