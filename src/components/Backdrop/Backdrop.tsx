import React from "react";
import {AnimatePresence, motion} from "framer-motion";

import {StyledBackdrop, StyledBackdropProps} from "@/components/Backdrop/styles.ts";

export interface BackdropProps extends StyledBackdropProps {
    open: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({open, onClick, customStyles, children}) => {
    return (
        <AnimatePresence>
            {open && (
                    <StyledBackdrop
                        as={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        onClick={onClick}
                        customStyles={customStyles}
                    >
                        {children}
                    </StyledBackdrop>
            )}
        </AnimatePresence>
    );
};

export default Backdrop;