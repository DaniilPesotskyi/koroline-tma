import React, {memo, useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useInView} from "react-intersection-observer";
import {useSearchParams} from "react-router-dom";

import {PRODUCTS_QUERY_KEY} from "@/constants/queryKeys.ts";

import {IProductPreview} from "@/types/products";

import {getProducts} from "@/api/products.ts";

import {AsyncContentWrapper, LastListElement, List, ProductCard} from "@/components";
import {useWindowVirtualizer} from "@tanstack/react-virtual";

const RenderedList: React.FC<{ pages: Array<IProductPreview[]> }> = memo(({pages}) => {

    const items = pages.flat() as IProductPreview[]

    const virtualizer = useWindowVirtualizer({
        count: items.length,
        estimateSize: () => 120,
        overscan: 3,
    });

    const virtualItems = virtualizer.getVirtualItems();

    return (
        <List
            style={{
                position: 'relative',
                height: virtualizer.getTotalSize(),
            }}
        >
            {virtualItems.map(item => {
                const product = items[item.index];
                return (
                    <div
                        data-index={item.index}
                        key={product.uuid}
                        ref={virtualizer.measureElement}
                        style={{
                            position: 'absolute',
                            top: item.start,
                            width: '100%',
                        }}
                    >
                        <ProductCard item={product}/>
                    </div>
                );
            })}
        </List>
    )
})

const ProductsList: React.FC = () => {
    const {ref, inView} = useInView({
        rootMargin: '400px'
    });

    const [searchParams] = useSearchParams()

    const {
        data,
        isFetching,
        fetchNextPage,
        isError,
        hasNextPage,
        isFetchingNextPage
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
                <LastListElement>Ви в кінці списку :)</LastListElement>
            )}

            {!isFetchingNextPage ? <span ref={ref}></span> : <LastListElement></LastListElement>}
        </>
    )
}

export default ProductsList;