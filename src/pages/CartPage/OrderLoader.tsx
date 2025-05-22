import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useTelegram} from "@/hooks";

import {Loader} from "@/components";
import {
    ErrorMessage,
    OrderLoaderWrap,
    StyledContinueButton,
    StyledExitButton,
    SuccessMessage
} from "@/pages/CartPage/styles.ts";

interface IOrderLoaderProps {
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
}

const OrderLoader: React.FC<IOrderLoaderProps> = ({isPending, isSuccess, isError}) => {
    const navigate = useNavigate();
    const {hideMainButton, hideBackButton} = useTelegram()

    useEffect(() => {
        hideMainButton()
        hideBackButton()
    }, []);

    const onExit = () => {
        navigate(-1)
    }

    if (isPending) {
        return (
            <OrderLoaderWrap>
                <Loader show={true}/>
            </OrderLoaderWrap>
        )
    }

    if (isError) {
        return (
            <OrderLoaderWrap>
                <ErrorMessage>
                    Під час оформлення виникла невідома помилка :(
                </ErrorMessage>
                <StyledExitButton onClick={onExit}>
                    Вийти
                </StyledExitButton>
            </OrderLoaderWrap>
        )
    }

    if (isSuccess) {
        return (
            <OrderLoaderWrap>
                <SuccessMessage>
                    Супер! Дякуємо за замовлення!
                </SuccessMessage>
                <StyledContinueButton onClick={onExit}>
                    Продовжити покупки
                </StyledContinueButton>
            </OrderLoaderWrap>
        )
    }
}

export default OrderLoader