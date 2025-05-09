import React, {ChangeEvent, useEffect, useState} from "react";

import {useTelegram} from "@/hooks";

import {useCart} from "@/context/CartContext.tsx";

import {LS_SAVED_ORDER_INFO_KEY} from "@/constants/localStorage.ts";

import {IRequestContactResponse} from "@/types/telegram";
import {ICartStepProps} from "@/pages/CartPage/CartPage.tsx";

import {InfoIcon, LocationIcon, PersonIcon, ShippingIcon} from "@/icons";

import {Alert, Checkbox, Input} from "@/components";

import {alertStyles, InputsGroup, InputsGroupLabel} from "@/pages/CartPage/styles.ts";

const Form: React.FC<ICartStepProps> = ({onNext, onPrev}) => {
    const {telegram, addMainButtonHandler, addBackButtonHandler} = useTelegram()
    const {orderInfo, updateOrderInfo} = useCart()

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [post, setPost] = useState('')

    const [shouldSaveInfo, setShouldSaveInfo] = useState<boolean>(false)

    useEffect(() => {
        const localStorageInfo = localStorage.getItem(LS_SAVED_ORDER_INFO_KEY)
        if (localStorageInfo) {
            const savedInfo = JSON.parse(localStorageInfo)
            updateOrderInfo({
                city: savedInfo.city,
                name: savedInfo.name,
                post: savedInfo.post,
                phone: '',
            })
        }
    }, [])

    useEffect(() => {
        if (orderInfo) {
            setName(orderInfo.name || '')
            setCity(orderInfo.city || '')
            setPost(orderInfo.post || '')
        }
    }, [orderInfo])

    useEffect(() => {
        const unsubscribeBackButton = addBackButtonHandler(onPrev)
        return () => {
            unsubscribeBackButton()
        }
    }, []);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    const handlePostChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(e.target.value)
    }

    useEffect(() => {
        const handleSubmit = () => {
            if (!name || !city || !post) {
                alert("Заповніть усі поля")
                return
            }

            telegram.requestContact((result: boolean, data: IRequestContactResponse) => {
                if (result) {

                    const orderInfo = {
                        city: city,
                        name: name,
                        phone: data.responseUnsafe.contact.phone_number,
                        post: post
                    }

                    updateOrderInfo(orderInfo)

                    if (shouldSaveInfo) {
                        localStorage.setItem(LS_SAVED_ORDER_INFO_KEY, JSON.stringify(orderInfo))
                    }
                    onNext()
                } else {
                    alert("Щоб оформити замовлення, нам потрібен ваш контакт")
                }
            })
        }

        const unsubscribeMainButton = addMainButtonHandler(handleSubmit, 'ОФОРМИТИ')

        return () => {
            unsubscribeMainButton()
        }
    }, [name, city, post, shouldSaveInfo]);

    return (
        <>

            <InputsGroupLabel>Особа</InputsGroupLabel>
            <InputsGroup>
                <Input label={'ФІО'} icon={<PersonIcon/>} value={name} onChange={handleNameChange}/>
            </InputsGroup>

            <InputsGroupLabel>Доставка</InputsGroupLabel>
            <InputsGroup>
                <Input label={'Місто'} icon={<LocationIcon/>} value={city} onChange={handleCityChange}/>
                <Input label={'Відділення НП'} icon={<ShippingIcon/>} value={post} onChange={handlePostChange}/>
            </InputsGroup>

            <Alert
                variant={'info'}
                icon={<InfoIcon/>}
                customStyles={alertStyles}
            >
                Після оформлення вам передзвонить менеджер для підтвердження замовлення
            </Alert>

            <Checkbox id={'save data'} checked={shouldSaveInfo}
                      handleChange={(checked: boolean) => setShouldSaveInfo(checked)}>
                <Checkbox.Indicator/>
                <Checkbox.Label>
                    Зберегти мої дані для наступних замовлень
                </Checkbox.Label>
            </Checkbox>
        </>
    )
}

export default Form