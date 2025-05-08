import React, {useEffect, useMemo, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

import {IProductExtended, IProductPhotos} from "@/types/products";

import {GALLERY_QUERY_KEY} from "@/constants/queryKeys.ts";

import {useTelegram} from "@/hooks";

import {useCart} from "@/context/CartContext.tsx";

import CloseButton from "@/layout/CloseButton/CloseButton.tsx";
import {Collapse, Options} from "@/components";

import {
    OrderBody,
    OrderHeader,
    OrderOptionLabel,
    orderOptionsStyles,
    orderOptionStyles
} from "@/pages/ProductPage/styles.ts";

interface IProps {
    product: IProductExtended
    onClose: () => void
}

const OrderMenu: React.FC<IProps> = ({product, onClose}) => {
    const queryClient = useQueryClient()
    const {addMainButtonHandler, addBackButtonHandler, disableMainButton, enableMainButton} = useTelegram()
    const {increment} = useCart()

    const [color, setColor] = useState<string>('')
    const [size, setSize] = useState<string>('')

    const photos: IProductPhotos | undefined = queryClient.getQueryData([GALLERY_QUERY_KEY, product.article])

    const selectedVariant = useMemo(() =>
            product.variations.find(variant => variant.color === color && variant.size === size),
        [product.variations, color, size]
    );

    useEffect(() => {
        const unsubscribeBackButton = addBackButtonHandler(onClose)

        return () => {
            unsubscribeBackButton()

            enableMainButton()
        };
    }, [])

    useEffect(() => {
        const addItem = () => {

            if (!selectedVariant) {
                return
            }

            const colorIndex = colors.indexOf(color)
            const photo = photos ? Object.values(photos.photo)[colorIndex] : ''

            increment({
                ...product,
                color: color,
                size: size,
                quantity: 1,
                uuid: selectedVariant.uuid,
                photo_example: photo ? photo[0] : '',
            })

            onClose()
            toast.success('Додано до кошика')
        }

        const unsubscribeMainButton = addMainButtonHandler(addItem);

        return () => {
            unsubscribeMainButton();
        };
    }, [color, size]);

    useEffect(() => {
        if (color && size) {
            enableMainButton()
        } else {
            disableMainButton()
        }
    }, [color, size]);

    const handleColorChange = (values: string[]) => {
        setColor(values[1])
        setSize('')
    };

    const handleSizeChange = (values: string[]) => {
        setSize(values[1])
    };

    const colors = [...new Set(product.variations.map(variant => variant.color))]
    const sizes = [...new Set(product.variations
        .filter(variant => variant.color === color)
        .map(variant => variant.size)
    )]

    return (
        <>
            <CloseButton onClick={onClose}/>
            <OrderHeader>
                Оберіть варіант
            </OrderHeader>
            <OrderBody>
                <OrderOptionLabel>Оберіть колір</OrderOptionLabel>
                <Options customStyles={orderOptionsStyles} values={[color]} onChange={handleColorChange}>
                    {colors.map(color => (
                        <Options.Option key={color} customStyles={orderOptionStyles}>{color}</Options.Option>
                    ))}
                </Options>
                <Collapse open={Boolean(color)}>
                    <OrderOptionLabel>Оберіть розмір</OrderOptionLabel>
                    <Options customStyles={orderOptionsStyles} values={[size]} onChange={handleSizeChange}>
                        {sizes.map(size => (
                            <Options.Option key={size} customStyles={orderOptionStyles}>{size}</Options.Option>
                        ))}
                    </Options>
                </Collapse>

            </OrderBody>
        </>
    )
}

export default OrderMenu;