import {createContext} from "react";

interface CheckboxContextProps {
    id: string;
    checked: boolean;
    onChange: (isChecked: boolean) => void;
}

const CheckboxContext = createContext<CheckboxContextProps>({
    id: "",
    checked: false,
    onChange: () => {},
});

export default CheckboxContext;