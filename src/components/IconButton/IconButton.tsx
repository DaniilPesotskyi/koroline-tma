import React, {JSX} from "react";
import {css} from "styled-components";

import {StyledIconButton} from "./styles";

import {ComponentProps} from "@/types/components";

import IconWrapper from "@/components/IconWrapper/IconWrapper.tsx";

export interface IconButtonProps {
    children: React.ReactNode;
    buttonCss?: ReturnType<typeof css>;
    iconCss?: ReturnType<typeof css>;
}

const IconButton = <T extends React.ElementType = "button">(
    {children, buttonCss, iconCss, component, ...props}: Omit<ComponentProps<T>, "children"> & IconButtonProps
): JSX.Element => {
    return (
        <StyledIconButton as={component} customStyles={buttonCss} {...props}>
            {React.isValidElement(children) ? (
                <IconWrapper customStyles={iconCss}>
                    {children}
                </IconWrapper>
            ) : (
                children
            )}
        </StyledIconButton>
    );
};

export default IconButton;
