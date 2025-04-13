import React, {JSX} from "react";

import {ComponentProps} from "@/types/components";

import IconWrapper from "@/components/IconWrapper/IconWrapper.tsx";

import {Field, iconStyles, StyledInput, StyledLabel} from "@/components/Input/styles.ts";

interface IInputProps {
    label: string;
    icon: React.ReactNode
}

const Input = <T extends React.ElementType = "input">(
    {label, onChange, id, icon, ...props}: Omit<ComponentProps<T>, "children"> & IInputProps
): JSX.Element => {
    return (
        <Field>
            <StyledInput id={id} type="text" placeholder={' '} onChange={onChange} {...props}/>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <IconWrapper customStyles={iconStyles}>
                {icon}
            </IconWrapper>
        </Field>
    )
}

export default Input;