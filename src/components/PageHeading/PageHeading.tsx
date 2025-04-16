import React from "react";

import {IStyledComponent} from "@/types/components";

import {StyledPageHeading, StyledPageHeadingSubtitle, StyledPageHeadingTitle} from "@/components/PageHeading/styles.ts";

interface IPageHeadingProps extends IStyledComponent {
    children: React.ReactNode
}

interface IPageHeadingComponentType extends React.FC<IPageHeadingProps> {
    Title: typeof Title
    Subtitle: typeof Subtitle
}

const Title: React.FC<IPageHeadingProps> = ({children, customStyles}) => {
    return (
        <StyledPageHeadingTitle customStyles={customStyles}>
            {children}
        </StyledPageHeadingTitle>
    )
}

const Subtitle: React.FC<IPageHeadingProps> = ({children, customStyles}) => {
    return (
        <StyledPageHeadingSubtitle customStyles={customStyles}>
            {children}
        </StyledPageHeadingSubtitle>
    )
}

const PageHeading: IPageHeadingComponentType = ({children, customStyles}) => {
    return (
        <StyledPageHeading customStyles={customStyles}>
            {children}
        </StyledPageHeading>
    )
}

PageHeading.Title = Title
PageHeading.Subtitle = Subtitle

export default PageHeading