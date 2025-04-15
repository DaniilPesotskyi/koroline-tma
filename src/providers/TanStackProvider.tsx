import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

interface ITanStackProviderProps {
    children: React.ReactNode
}

const TanStackProvider: React.FC<ITanStackProviderProps> = ({children}) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    )
}

export default TanStackProvider;