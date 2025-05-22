import React, {useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

import {ICartStepProps} from "@/pages/CartPage/CartPage.tsx";

import useTelegram from "@/hooks/useTelegram.ts";

import {useCart} from "@/context/CartContext.tsx";

import {CartItem} from "@/components";

const ItemsList: React.FC<ICartStepProps> = ({onNext}) => {
    const navigate = useNavigate()
    const {items} = useCart()
    const {
        addBackButtonHandler,
        addMainButtonHandler,
    } = useTelegram()

    useEffect(() => {
        const unsubscribeMainButton = addMainButtonHandler(onNext, 'ДО ОФОРМЛЕННЯ')
        const unsubscribeBackButton = addBackButtonHandler(() => navigate(-1))

        return () => {
            unsubscribeMainButton()
            unsubscribeBackButton()
        }
    }, []);

    return (
        <ul>
            <AnimatePresence initial={false}>
                {items.map(item => (
                    <motion.li
                        initial={{height: 0}}
                        animate={{height: "auto"}}
                        exit={{height: 0, overflow: "hidden"}}
                        transition={{type: "spring", bounce: 0, duration: 0.4}}
                        key={item.barcode}
                    >
                        <CartItem key={item.barcode} item={item}/>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    )
}

export default ItemsList;