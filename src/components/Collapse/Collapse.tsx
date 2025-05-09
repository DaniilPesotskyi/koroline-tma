import React from "react";
import {motion} from "framer-motion";

import {IStyledComponent} from "@/types/components";

import {StyledCollapse} from "@/components/Collapse/styles.ts";

interface ICollapseProps extends IStyledComponent {
    children: React.ReactNode
    orientation?: "horizontal" | "vertical"
    open: boolean
}

const Collapse: React.FC<ICollapseProps> = ({children, open, customStyles, orientation = 'vertical'}) => {
    const animate = {
        transition: {type: "tween"},
        ...(orientation === "horizontal"
            ? { width: open ? "auto" : 0 }
            : { height: open ? "auto" : 0 })
    };

    const initial = orientation === "horizontal" ? { width: 0, opacity: 1 } : { height: 0, opacity: 1 };


    return (
        <StyledCollapse customStyles={customStyles}>
            <motion.div
                style={{overflow: "hidden", textWrap: "nowrap"}}
                initial={initial}
                animate={animate}
                exit={{height: 0, opacity: 1}}
            >
                {children}
            </motion.div>
        </StyledCollapse>
    )
}

export default Collapse;