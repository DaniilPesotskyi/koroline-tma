import React, {useContext} from "react";
import {css} from "styled-components";
import {motion} from "framer-motion";

import CheckboxContext from "@/components/Checkbox/CheckboxContext.tsx";
import {
    StyledCheckboxIndicator,
    StyledCheckboxIndicatorInput,
    StyledCheckboxIndicatorWrap,
} from "@/components/Checkbox/styles.ts";

interface ICheckboxIndicatorProps {
    checkboxIndicatorStyles?: ReturnType<typeof css>
    checkboxInputStyles?: ReturnType<typeof css>;
}

const tickVariants = {
    checked: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
            delay: 0.2,
        },
    },
    unchecked: {
        pathLength: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

const CheckboxIndicator: React.FC<ICheckboxIndicatorProps> = ({checkboxIndicatorStyles, checkboxInputStyles}) => {
    const {id, checked, onChange} = useContext(CheckboxContext);

    return (
        <StyledCheckboxIndicatorWrap>
            <StyledCheckboxIndicatorInput
                customStyles={checkboxInputStyles}
                type="checkbox"
                onChange={() => onChange(!checked)}
                id={id}
            />
            <StyledCheckboxIndicator customStyles={checkboxIndicatorStyles}>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3.5"
                    stroke="#ffffff"
                    initial={false}
                    animate={checked ? "checked" : "unchecked"}
                >
                    <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        variants={tickVariants}
                    />
                </motion.svg>
            </StyledCheckboxIndicator>
        </StyledCheckboxIndicatorWrap>
    );
}

export default CheckboxIndicator;