import React from "react";

import {IStyledComponent} from "@/types/components";

import {AnimatePresence, motion, Variants} from "framer-motion";

import {StyledLoaderSpinner, StyledLoaderWrapper} from "@/components/Loader/styles.ts";

interface ILoaderProps extends IStyledComponent{
    show: boolean;
}

const loaderVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

const spinTransition = {
    repeat: Infinity,
    ease: "easeInOut",
    duration: 1
};

const Loader: React.FC<ILoaderProps> = ({show, customStyles}) => {
    return (
        <AnimatePresence>
            {show && (
                <StyledLoaderWrapper
                    as={motion.div}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={loaderVariants}
                    transition={{duration: 0.3}}
                    customStyles={customStyles}
                >
                    <StyledLoaderSpinner
                        as={motion.span}
                        animate={{rotate: 360}}
                        transition={spinTransition}
                    />
                </StyledLoaderWrapper>
            )}
        </AnimatePresence>
    )
}

export default Loader