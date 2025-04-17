import React from "react";
import {useQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";

import {CATEGORIES_QUERY_KEY} from "@/constants/queryKeys.ts";
import {CATEGORIES_PARAM_KEY} from "@/constants/searchParamsKeys.ts";

import {getProductsCategories} from "@/api/products.ts";

import {Options} from "@/components";

const Categories: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const {data} = useQuery({
        queryKey: [CATEGORIES_QUERY_KEY],
        queryFn: async () => getProductsCategories(),
    })

    const handleChange = (values: string[]) => {
       setSearchParams({[CATEGORIES_PARAM_KEY]: values})
    }

    return (
        <>
            {data && (
                <Options values={searchParams.getAll(CATEGORIES_PARAM_KEY)} onChange={handleChange}>
                    {data.map((category, i) => (
                        <Options.Option key={i}>{category}</Options.Option>
                    ))}
                </Options>
            )}
        </>
    )
}

export default Categories