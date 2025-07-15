import React from "react";

import {ICartItem} from "@/types/cart";

import {useCart} from "@/context/CartContext.tsx";

import {AddIcon, ColorIcon, DeleteIcon, RemoveIcon, SizeIcon} from "@/icons";
import {IconButton, IconWrapper} from "@/components";

import {
    Article,
    Category, deleteButtonStyles, deleteIconStyles, iconStyles,
    Image,
    InformationBlock, Price, QuantityPicker, quantityPickerButtonStyles, QuantityPickerValue,
    StyledWrap,
    VariantInfo, VariantInfoItem,
    VariantWrap
} from "@/components/CartItem/styles.ts";


interface ICartItemProps {
    item: ICartItem
    disabled?: boolean
}

const CartItem: React.FC<ICartItemProps> = ({item, disabled}) => {
    const {increment, decrement, deleteItem} = useCart()

    const handleIncrement = () => {
        increment(item)
    }

    const handleDecrement = () => {
        decrement(item)
    }

    const handleDelete = () => {
        deleteItem(item.barcode)
    }

    return (
        <StyledWrap>
            {!disabled && (
                <IconButton
                    onClick={handleDelete}
                    buttonCss={deleteButtonStyles}
                    iconCss={deleteIconStyles}
                >
                    <DeleteIcon/>
                </IconButton>
            )}
            <Image src={item.photo_example} alt=""/>
            <InformationBlock>
                <div>
                    <Article>{item.article}</Article>
                    <Category>{item.brand} | {item.category}</Category>
                </div>
                <VariantWrap>
                    <VariantInfo>
                        <VariantInfoItem>
                            <IconWrapper customStyles={iconStyles}>
                                <ColorIcon/>
                            </IconWrapper>
                            {item.color}
                        </VariantInfoItem>
                        <VariantInfoItem>
                            <IconWrapper customStyles={iconStyles}>
                                <SizeIcon/>
                            </IconWrapper>
                            {item.size}
                        </VariantInfoItem>
                    </VariantInfo>

                        <QuantityPicker>
                            {!disabled && (
                                <IconButton buttonCss={quantityPickerButtonStyles} onClick={handleDecrement}>
                                    <RemoveIcon/>
                                </IconButton>
                            )}
                            <QuantityPickerValue>
                                {item.quantity}
                            </QuantityPickerValue>
                            {!disabled && (
                                <IconButton buttonCss={quantityPickerButtonStyles} onClick={handleIncrement}>
                                    <AddIcon/>
                                </IconButton>
                            )}
                        </QuantityPicker>

                    <Price>
                        {item.price * item.quantity} ₴
                    </Price>

                </VariantWrap>
            </InformationBlock>
        </StyledWrap>
    )
}

export default CartItem