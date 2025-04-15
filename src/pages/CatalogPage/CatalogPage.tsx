import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useInView} from "react-intersection-observer";

import {getProducts} from "@/api/products.ts";

import {IProductPreview} from "@/types/products";

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

const CatalogPage: React.FC = () => {
    const {ref, inView} = useInView({
        rootMargin: '500px',
    });

    const {
        data,
        isFetching,
        fetchNextPage,
        isError
    } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: async ({pageParam}) => getProducts(pageParam, 20),
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
            <h1>Catalog</h1>
            <AsyncContentWrapper
                error={isError}
                data={data?.pages}
                resourceName={'pages'}
                isLoading={isFetching}
            >
                {/*@ts-ignore*/}
                <RenderedList/>
            </AsyncContentWrapper>
            <span ref={ref}></span>
            <Outlet/>
        </>
    )
}

export default CatalogPage