import React from "react";

import {Loader} from "@/components";
import {StyledErrorMessage, StyledErrorWrapper, StyledSubmessage} from "@/components/AsyncContentWrapper/styles.ts";

interface IAsyncContentWrapperProps {
    children: React.ReactNode

    data: unknown
    resourceName: string

    isLoading: boolean,
    error: boolean,
    errorStub?: React.ReactNode
}

const AsyncContentWrapper: React.FC<IAsyncContentWrapperProps> = (
    {
        children,
        data,
        isLoading,
        resourceName,
        error,
        errorStub,
    }) => {

    if (error) {
        if (errorStub) {
            return (
                <>{errorStub}</>
            )
        }

        return (
            <StyledErrorWrapper>
                <StyledErrorMessage>
                    Cтався невеличкий збій
                </StyledErrorMessage>
                <StyledSubmessage>
                    Дайте нам трошки часу - ми все приведемо до ладу!
                </StyledSubmessage>
            </StyledErrorWrapper>
        )
    }

    return (
        <>
            <Loader show={isLoading}/>
            {data && React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {[resourceName]: data});
                }
                return child;
            })}
        </>
    )
}

export default AsyncContentWrapper