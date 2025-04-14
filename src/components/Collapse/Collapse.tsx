import React from "react";
import {motion} from "framer-motion";

import {IStyledComponent} from "@/types/components";

import {StyledCollapse} from "@/components/Collapse/styles.ts";

interface ICollapseProps extends IStyledComponent {
    children: React.ReactNode
    open: boolean
}

const Collapse: React.FC<ICollapseProps> = ({children, open, customStyles}) => {
    const animate = {
        transition: {type: "tween"},
        height: open ? "auto" : 0
    };

    return (
        <StyledCollapse customStyles={customStyles}>
            <motion.div
                style={{overflow: "hidden"}}
                initial={{height: 0, opacity: 1}}
                animate={animate}
                exit={{height: 0, opacity: 1}}
            >
                {children}
            </motion.div>
        </StyledCollapse>
    )
}

export default Collapse;