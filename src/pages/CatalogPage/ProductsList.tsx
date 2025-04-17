import React, {useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useInView} from "react-intersection-observer";
import {useSearchParams} from "react-router-dom";

import {PRODUCTS_QUERY_KEY} from "@/constants/queryKeys.ts";

import {IProductPreview} from "@/types/products";

import {getProducts} from "@/api/products.ts";

import {AsyncContentWrapper, List, ProductCard} from "@/components";

const RenderedList: React.FC<{ pages: Array<IProductPreview[]> }> = ({pages}) => {
    return (
        <List>
            {pages.map((page) =>
                page.map((product) => (
                    <ProductCard key={product.uuid} item={product}/>
                ))
            )}
        </List>
    )
}

const ProductsList: React.FC = () => {
    const {ref, inView} = useInView({
        rootMargin: '500px',
    });

    const [searchParams] = useSearchParams()

    const {
        data,
        isFetching,
        fetchNextPage,
        isError,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: [PRODUCTS_QUERY_KEY, searchParams.toString()],
        queryFn: async ({pageParam}) => getProducts(pageParam, 20, searchParams.toString()),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 20 ? allPages.length * 20 : undefined;
        },
    })

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView])

    return (
        <>
            <AsyncContentWrapper
                error={isError}
                data={data?.pages}
                resourceName={'pages'}
                isLoading={isFetching}
            >
                {/*@ts-ignore*/}
                <RenderedList/>
            </AsyncContentWrapper>

            {!hasNextPage && data?.pages && (
                <span>Це весь наш товар</span>
            )}

            <span ref={ref}></span>
        </>
    )
}

export default ProductsList;