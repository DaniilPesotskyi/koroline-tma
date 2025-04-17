import React, {isValidElement} from "react";

import {IStyledComponent} from "@/types/components";

import {StyledOptions} from "@/components/Options/styles.ts";

import Option, {IOptionProps} from "@/components/Options/Option.tsx";

export interface IOptionsProps extends IStyledComponent {
    children: React.ReactNode;

    onChange: (values: string[]) => void;
    values: string[];
}

interface OptionsComponentType extends React.FC<IOptionsProps> {
    Option: typeof Option
}

const Options: OptionsComponentType = ({children, values, onChange, customStyles}) => {
    const handleClick = (value: string) => {
        let newValues: string[] = []

        if (values.includes(value)) {
            newValues = values.filter(i => i !== value)
        } else {
            newValues = [...values, value]
        }

        onChange(newValues)
    }

    return (
        <StyledOptions customStyles={customStyles}>
            {React.Children.map(children, (child, i) => {
                if (!isValidElement<IOptionProps>(child)) return null;

                const active = values.includes(child.props.children)
                return (
                    <React.Fragment key={i}>
                        {React.cloneElement(child, {
                            active,
                            onClick: handleClick,
                        })}
                    </React.Fragment>
                )
            })}
        </StyledOptions>
    )
}

Options.Option = Option

export default Options;