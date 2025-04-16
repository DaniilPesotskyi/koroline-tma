import React from "react";

import {IStyledOption, StyledOption} from "@/components/Options/styles.ts";

export interface IOptionProps extends IStyledOption {
    children: string
    onClick?: (value: string) => void
}

const Option: React.FC<IOptionProps> = ({children, onClick, customStyles, active}) => {
    return (
        <StyledOption
            active={active}
            customStyles={customStyles}
            onClick={() => onClick && onClick(children)}>
            {children}
        </StyledOption>
    )
}

export default Option;