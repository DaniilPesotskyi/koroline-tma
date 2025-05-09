import React, { ReactNode } from "react";

import CheckboxContext from "./CheckboxContext";

import CheckboxIndicator from "./CheckboxIndicator";
import CheckboxLabel from "./CheckboxLabel";

import {IStyledComponent} from "@/types/components";

import {StyledCheckboxWrap} from "@/components/Checkbox/styles.ts";

export interface CheckboxProps extends IStyledComponent{
    children: ReactNode;
    id: string;

    checked: boolean;
    handleChange: (checked: boolean) => void;
}

interface CheckboxComponentType extends React.FC<CheckboxProps> {
    Indicator: typeof CheckboxIndicator;
    Label: typeof CheckboxLabel;
}

const Checkbox: CheckboxComponentType = ({ children, id, customStyles, checked, handleChange }) => {

    return (
        <StyledCheckboxWrap customStyles={customStyles}>
            <CheckboxContext.Provider
                value={{
                    id,
                    checked,
                    onChange: handleChange,
                }}
            >
                {children}
            </CheckboxContext.Provider>
        </StyledCheckboxWrap>
    );
};

Checkbox.Indicator = CheckboxIndicator;
Checkbox.Label = CheckboxLabel;

export default Checkbox;
