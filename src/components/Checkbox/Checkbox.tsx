import React, { ReactNode, useState } from "react";

import CheckboxContext from "./CheckboxContext";

import CheckboxIndicator from "./CheckboxIndicator";
import CheckboxLabel from "./CheckboxLabel";

import {IStyledComponent} from "@/types/components";

import {StyledCheckboxWrap} from "@/components/Checkbox/styles.ts";

export interface CheckboxProps extends IStyledComponent{
    children: ReactNode;
    id: string;
}

interface CheckboxComponentType extends React.FC<CheckboxProps> {
    Indicator: typeof CheckboxIndicator;
    Label: typeof CheckboxLabel;
}

const Checkbox: CheckboxComponentType = ({ children, id, customStyles }) => {
    const [checked, setChecked] = useState(false);

    return (
        <StyledCheckboxWrap customStyles={customStyles}>
            <CheckboxContext.Provider
                value={{
                    id,
                    checked,
                    onChange: setChecked,
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
