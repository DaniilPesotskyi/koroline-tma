import React, {useEffect} from "react";
import {useMutation} from "@tanstack/react-query";

import {ICartStepProps} from "@/pages/CartPage/CartPage.tsx";

import {ISendMessageProps, sendMessage} from "@/api/telegram.ts";

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
    OrderTotalPriceLabel, OrderTotalPriceValue
} from "@/pages/CartPage/styles.ts";

const Accepting: React.FC<ICartStepProps> = ({onPrev}) => {
    const {user, addBackButtonHandler, addMainButtonHandler} = useTelegram()
    const {items, orderInfo} = useCart()

    const {
        mutateAsync,
        isPending,
        isSuccess,
        isError,
    } = useMutation({
        mutationFn: sendMessage
    });

    useEffect(() => {
        const makeOrder = async () => {
            const divider = '-------------------------\n'

            const managerData: ISendMessageProps = {
                chatId: import.meta.env.VITE_TELEGRAM_ORDERS_CHAT_ID,
                // message: `✅Замовлення \n ${divider}`,
                message: ''
            }

            const clientData: ISendMessageProps = {
                chatId: user.id,
                // message: `✅Ваше замовлення \n ${divider}`,
                message: ''
            }

            items.forEach((item, i) => {
                // Order for client
                clientData.message += `🌸*${item.category} ${item.brand}*(${item.article}) \n *${item.quantity} од.* в кольорі *${item.color}* на суму *${item.quantity * item.price}* ₴\n`
                if (i !== items.length - 1) clientData.message += `\n`
                // Order for manager
                managerData.message += `${item.barcode} - ${item.quantity}\n`
                if (i !== items.length - 1) managerData.message += `\n`
            })


            managerData.message += divider
            clientData.message += divider

            // Shipping
            if (orderInfo) {
                const orderInformation = `😇 ФІО: *${orderInfo.name}\n*📍 Місто: *${orderInfo.city}\n*🚚 Відділення НП: *${orderInfo.post}*\n📞 Номер телефону: *${orderInfo.phone}*\n`

                managerData.message += orderInformation
                clientData.message += orderInformation
            }

            // Thanks for client
            managerData.message += divider
            clientData.message += divider

            clientData.message += `🙂З *будь-яких питань* звертайтесь до нашого *менеджера* - +380675644840\n`
            clientData.message += divider
            clientData.message += `❤️ Дякуємо що обрали нас!`

            try {
                await mutateAsync(managerData)
                await mutateAsync(clientData)
            } catch (error) {
                console.log(error)
            }
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
            {/*<AcceptingWrap>*/}
            {/*    <OrderNumber>Замовлення №123123123</OrderNumber>*/}
            {/*</AcceptingWrap>*/}

            <AcceptingWrap>
                <AcceptingList>
                    {items.map(item => (
                        <li key={item.barcode}>
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
                <OrderLoader isPending={isPending} isError={isError} isSuccess={isSuccess}/>
            </Drawer>
        </>
    )
}

export default Accepting