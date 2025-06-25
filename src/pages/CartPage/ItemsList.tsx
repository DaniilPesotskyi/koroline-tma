import React, {useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

import {ICartStepProps} from "@/pages/CartPage/CartPage.tsx";

import useTelegram from "@/hooks/useTelegram.ts";

import {useCart} from "@/context/CartContext.tsx";

import {CartItem} from "@/components";
import {EmptyMessage} from "@/pages/CartPage/styles.ts";

const ItemsList: React.FC<ICartStepProps> = ({onNext}) => {
    const navigate = useNavigate()
    const {items} = useCart()
    const {
        addBackButtonHandler,
        addMainButtonHandler,
        disableMainButton,
        enableMainButton
    } = useTelegram()

    useEffect(() => {
        const unsubscribeMainButton = addMainButtonHandler(onNext, 'ДО ОФОРМЛЕННЯ')
        const unsubscribeBackButton = addBackButtonHandler(() => navigate(-1))

        return () => {
            unsubscribeMainButton()
            unsubscribeBackButton()
        }
    }, []);

    useEffect(() => {
        if(items.length === 0) {
            disableMainButton()
        } else {
            enableMainButton()
        }

        return () => {
            enableMainButton()
        }

    }, [items]);

    if(items.length === 0) {
        return (
            <EmptyMessage>
                Ваш кошик порожній :(
            </EmptyMessage>
        )
    }

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