import React from "react";
import TanStackProvider from "@/providers/TanStackProvider.tsx";

interface IProvidersProps {
    children: React.ReactNode
}

const Providers: React.FC<IProvidersProps> = ({children}) => {
    return (
        <TanStackProvider>
            {children}
        </TanStackProvider>
    )
}

export default Providers;