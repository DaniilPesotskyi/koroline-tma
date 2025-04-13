import React, {ReactNode, useContext} from "react";
import {motion} from "framer-motion";

import {IStyledComponent} from "@/types/components";

import CheckboxContext from "@/components/Checkbox/CheckboxContext.tsx";

import {StyledCheckboxLabel} from "@/components/Checkbox/styles.ts";

interface CheckboxLabelProps extends IStyledComponent {
    children: ReactNode;
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({children, customStyles}) => {
    const {id, checked} = useContext(CheckboxContext);

    return (
        <StyledCheckboxLabel
            as={motion.label}
            htmlFor={id}
            customStyles={customStyles}
            animate={{
                color: checked ? "#000000" : "#a1a1a1",
            }}
            initial={false}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {children}
        </StyledCheckboxLabel>
    );
}

export default CheckboxLabel;