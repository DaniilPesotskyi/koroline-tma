import React from "react";

import {CloseIcon} from "@/icons";

import {IconButton, IconWrapper} from "@/components";

import {buttonStyles, iconStyles} from "@/layout/CloseButton/styles.ts";

interface ICloseButtonProps {
    onClick: () => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({onClick}) => {
    return (
        <IconButton
            onClick={onClick}
            buttonCss={buttonStyles}
        >
            <IconWrapper customStyles={iconStyles}>
                <CloseIcon/>
            </IconWrapper>
        </IconButton>
    )
}

export default CloseButton;