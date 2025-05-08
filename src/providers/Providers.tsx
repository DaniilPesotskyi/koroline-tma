import React from "react";
import {Toaster} from "react-hot-toast";

import TanStackProvider from "@/providers/TanStackProvider.tsx";
import {CartContextProvider} from "@/context/CartContext.tsx";

interface IProvidersProps {
    children: React.ReactNode
}

const Providers: React.FC<IProvidersProps> = ({children}) => {
    return (
        <TanStackProvider>
            <CartContextProvider>
                {children}
            </CartContextProvider>
            <Toaster position={'bottom-center'}/>
        </TanStackProvider>
    )
}

export default Providers;