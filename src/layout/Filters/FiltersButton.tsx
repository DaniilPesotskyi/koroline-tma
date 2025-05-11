import React, {memo, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {FILTER_LABELS} from "@/constants/filtersLabels.ts";

import {FiltersToRenderType} from "@/layout/Filters/Filters.tsx";

import {DeleteIcon} from "@/icons";

import {Drawer, IconWrapper} from "@/components";

import FiltersPicker from "@/layout/Filters/FiltersPicker.tsx";
import {
    deleteIconStyles,
    drawerStyles,
    StyledFilterButton
} from "@/layout/Filters/styles.ts";

interface IFiltersButtonProps {
    filter: keyof FiltersToRenderType
}

const FiltersButton: React.FC<IFiltersButtonProps> = ({filter}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const clearFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const newParams = new URLSearchParams(searchParams.toString())
        newParams.delete(filter)
        setSearchParams(newParams)
    }

    const selectedFilters = searchParams.getAll(filter)

    return (
        <>
            <StyledFilterButton onClick={toggleOpen}>
                {FILTER_LABELS[filter]}
                {selectedFilters.length > 0 && (
                    <IconWrapper onClick={clearFilters} customStyles={deleteIconStyles}>
                        <DeleteIcon/>
                    </IconWrapper>
                )}
            </StyledFilterButton>

            <Drawer
                open={isOpen}
                position="bottom"
                onClose={toggleOpen}
                customStyles={drawerStyles}
            >
                <FiltersPicker onClose={toggleOpen} filter={filter}/>
            </Drawer>
        </>
    )
}

export default memo(FiltersButton)