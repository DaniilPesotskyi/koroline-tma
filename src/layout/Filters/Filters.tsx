import React from "react";
import {useQuery} from "@tanstack/react-query";

import {IFiltersType} from "@/types/filters";

import {FILTERS_QUERY_KEY} from "@/constants/queryKeys.ts";

import {getProductsFilters} from "@/api/products.ts";

import {FilterList} from "@/layout/Filters/styles.ts";
import FiltersButton from "@/layout/Filters/FiltersButton.tsx";

export type FiltersToRenderType = Omit<IFiltersType, "designs" | 'min_price' | 'max_price'>;

const Filters: React.FC = () => {
    const {data, isError} = useQuery({
        queryKey: [FILTERS_QUERY_KEY],
        queryFn: async () => await getProductsFilters(),
    })

    if (!data || isError) return null

    const filters = Object.keys(data).filter(filter => !['designs', 'min_price', 'max_price'].includes(filter)) as Array<keyof FiltersToRenderType>

    return (
        <>
            <FilterList>
                {filters.map((filter) => (
                    <li key={filter}>
                        <FiltersButton key={filter} filter={filter}/>
                    </li>
                ))}
            </FilterList>
        </>
    )
}

export default Filters;