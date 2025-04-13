import React from "react";
import {css} from "styled-components";

export type ComponentProps<T extends React.ElementType> = {
    component?: T;
} & React.ComponentPropsWithoutRef<T>;

export interface IStyledComponent {
    customStyles?: ReturnType<typeof css>;
}