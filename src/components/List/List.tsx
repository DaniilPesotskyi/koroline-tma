import React, {HTMLProps, ReactNode} from "react";

import {IStyledComponent} from "@/types/components";

import {StyledList} from "@/components/List/styles.ts";

interface IListProps extends IStyledComponent, HTMLProps<HTMLUListElement>{
    children: ReactNode;

    getKey?: (child: React.ReactNode, index: number) => string
}

const List: React.FC<IListProps> = ({children, getKey, customStyles, ...rest}) => {
    return (
        <StyledList customStyles={customStyles} {...rest}>
            {React.Children.map(children, (child, i) => (
                <li key={getKey ? getKey(child, i) : i}>
                    {child}
                </li>
            ))}
        </StyledList>
    )
}

export default List