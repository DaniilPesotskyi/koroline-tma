import React from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";

import {useCart} from "@/context/CartContext.tsx";

import {CartIcon} from "@/icons";

import {IconButton} from "@/components";

import {cartButtonStyles, CartQuantity} from "@/pages/CatalogPage/styles.ts";
import {useNavigate} from "react-router-dom";

const variants: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

const CartButton: React.FC = () => {
    const navigate = useNavigate()
    const {items} = useCart()

    return (
        <AnimatePresence>
            {items.length > 0 && (
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate='visible'
                    exit="exit"
                >
                    <IconButton
                        buttonCss={cartButtonStyles}
                        onClick={() => navigate('/cart')}
                    >
                        <CartIcon/>
                        <CartQuantity>{items.length}</CartQuantity>
                    </IconButton>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CartButton;