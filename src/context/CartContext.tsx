import React, {createContext, useContext, useState} from "react";

import {ICartItem, IOrderInfo} from "@/types/cart";

interface ICartContext {
    items: ICartItem[];
    increment: (variant: ICartItem) => void;
    decrement: (variant: ICartItem) => void;
    deleteItem: (barcode: ICartItem['barcode']) => void;
    clearCart: () => void;

    orderInfo: IOrderInfo | null;
    updateOrderInfo: (info: IOrderInfo) => void;
}

interface ICartProviderProps {
    children: React.ReactNode;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartContextProvider: React.FC<ICartProviderProps> = ({children}) => {
    const [items, setItems] = useState<ICartItem[]>([]);
    const [orderInfo, setOrderInfo] = useState<IOrderInfo | null>(null);

    const increment = (variant: ICartItem) => {
        setItems(prevState => {
            const variantInCart = prevState.find((v) => v.barcode === variant.barcode)

            if (variantInCart) {
                return prevState.map(v =>
                    v.barcode === variant.barcode
                        ? {...v, quantity: v.quantity + 1}
                        : v
                );
            } else {
                return [...prevState, {...variant, quantity: 1}];
            }
        })
    }

    const decrement = (variant: ICartItem) => {
        setItems(prevState =>
            prevState
                .map(item =>
                    item.barcode === variant.barcode
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const deleteItem = (uuid: ICartItem['barcode']) => {
        setItems(prevState => {
            return prevState.filter(item => item.barcode !== uuid)
        })
    }

    const clearCart = () => {
        setItems([])
    }

    const updateOrderInfo = (info: IOrderInfo) => {
        setOrderInfo(info)
    }

    return (
        <CartContext.Provider value={{items, increment, decrement, deleteItem, clearCart, orderInfo, updateOrderInfo}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within an Provider");
    }
    return context;
};