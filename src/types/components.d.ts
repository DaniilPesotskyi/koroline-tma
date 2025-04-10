import React from "react";

export type ComponentProps<T extends React.ElementType> = {
    component?: T;
} & React.ComponentPropsWithoutRef<T>;
