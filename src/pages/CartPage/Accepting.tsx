import React, {useEffect} from "react";
import {useMutation} from "@tanstack/react-query";

import {ICartStepProps} from "@/pages/CartPage/CartPage.tsx";

import {useCart} from "@/context/CartContext.tsx";

import {useTelegram} from "@/hooks";

import {Drawer, CartItem} from "@/components";

import OrderLoader from "@/pages/CartPage/OrderLoader.tsx";

import {
    AcceptingItem,
    AcceptingLabel,
    AcceptingList,
    AcceptingValue,
    AcceptingWrap, orderLoaderDrawerStyles,
    OrderNumber, OrderTotalPriceLabel, OrderTotalPriceValue
} from "@/pages/CartPage/styles.ts";

export const createOrder = async (): Promise<{ status: string }> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const isSuccess = Math.random() < 0.5;

    if (isSuccess) {
        return {status: "success"};
    } else {
        throw new Error("Failed to create order");
    }
};

const Accepting: React.FC<ICartStepProps> = ({onPrev}) => {
    const {addBackButtonHandler, addMainButtonHandler} = useTelegram()

    const {items, orderInfo} = useCart()

    const {
        mutate,
        isPending,
        isSuccess,
        isError,
    } = useMutation({
        mutationFn: createOrder
    });

    useEffect(() => {
        const makeOrder = () => {
            mutate()
        }

        const unsubscribeMainButton = addMainButtonHandler(makeOrder, 'ОФОРМИТИ')
        const unsubscribeBackButton = addBackButtonHandler(onPrev)

        return () => {
            unsubscribeMainButton()
            unsubscribeBackButton()
        }
    }, []);

    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <>
            <AcceptingWrap>
                <OrderNumber>Замовлення №123123123</OrderNumber>
            </AcceptingWrap>

            <AcceptingWrap>
                <AcceptingList>
                    {items.map(item => (
                        <li>
                            <CartItem item={item} disabled={true}/>
                        </li>
                    ))}
                </AcceptingList>
            </AcceptingWrap>

            <AcceptingWrap>
                <AcceptingList>
                    <AcceptingItem>
                        <AcceptingLabel>ФІО</AcceptingLabel>
                        <AcceptingValue>{orderInfo?.name}</AcceptingValue>
                    </AcceptingItem>
                    <AcceptingItem>
                        <AcceptingLabel>Місто</AcceptingLabel>
                        <AcceptingValue>{orderInfo?.city}</AcceptingValue>
                    </AcceptingItem>
                    <AcceptingItem>
                        <AcceptingLabel>Відділення НП</AcceptingLabel>
                        <AcceptingValue>{orderInfo?.post}</AcceptingValue>
                    </AcceptingItem>
                    <AcceptingItem>
                        <AcceptingLabel>Номер телефону</AcceptingLabel>
                        <AcceptingValue>{orderInfo?.phone}</AcceptingValue>
                    </AcceptingItem>
                </AcceptingList>
            </AcceptingWrap>

            <AcceptingWrap>
                <AcceptingItem>
                    <OrderTotalPriceLabel>
                        Сума
                    </OrderTotalPriceLabel>
                    <OrderTotalPriceValue>{total} ₴</OrderTotalPriceValue>
                </AcceptingItem>
            </AcceptingWrap>

            <Drawer
                open={isPending || isSuccess || isError}
                onClose={() => {
                }}
                position={'bottom'}
                customStyles={orderLoaderDrawerStyles}
            >
                <OrderLoader isPending={isPending} isError={isError} isSuccess={isSuccess} retry={() => mutate()}/>
            </Drawer>
        </>
    )
}

export default Accepting