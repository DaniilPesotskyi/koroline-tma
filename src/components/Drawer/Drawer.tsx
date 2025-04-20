import React, {ReactNode} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "framer-motion";

import Backdrop from "@/components/Backdrop/Backdrop.tsx";
import {StyledDrawer, StyledDrawerProps} from "@/components/Drawer/styles.ts";

export interface DrawerProps extends StyledDrawerProps {
    children: ReactNode;

    open: boolean;
    onClose: () => void;
}

const drawerVariants = {
    left: {
        hidden: {x: "-100%"},
        visible: {x: 0},
        exit: {x: "-100%"},
    },
    right: {
        hidden: {x: "100%"},
        visible: {x: 0},
        exit: {x: "100%"},
    },
    top: {
        hidden: {y: "-100%"},
        visible: {y: 0},
        exit: {y: "-100%"},
    },
    bottom: {
        hidden: {y: "100%"},
        visible: {y: 0},
        exit: {y: "100%"},
    },
};

const Drawer: React.FC<DrawerProps> = (
    {
        children,
        open,
        onClose,
        position,
        customStyles
    }) => {

    const drawerContent = (
        <>
            <Backdrop open={open} onClick={onClose}/>
            <AnimatePresence>
                {open && (
                    <StyledDrawer
                        as={motion.div}
                        position={position}
                        customStyles={customStyles}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={drawerVariants[position]}
                        transition={{
                            type: "tween",
                            ease: "easeOut",
                            duration: 0.3,
                        }}
                    >
                        {children}
                    </StyledDrawer>
                )}
            </AnimatePresence>
        </>
    )

    const portalRoot = document.getElementById("drawers-root");
    if (!portalRoot) {
        return null;
    }
    return createPortal(drawerContent, portalRoot);
};

export default Drawer;
