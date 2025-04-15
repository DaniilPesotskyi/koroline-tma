import React from "react";

import {IconWrapper} from "@/components";

import {StyledAlert, StyledAlertProps} from "@/components/Alert/styles.ts";

interface IAlertProps extends StyledAlertProps {
    children: React.ReactNode;
    icon: React.ReactNode
}

const Alert: React.FC<IAlertProps> = ({children, icon, customStyles, variant}) => {
    return (
        <StyledAlert variant={variant} customStyles={customStyles}>
            <IconWrapper>
                {icon}
            </IconWrapper>
            {children}
        </StyledAlert>
    )
}

export default Alert;