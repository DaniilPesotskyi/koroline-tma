import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import {getProductById} from "@/api/products.ts";

import {PRODUCTS_QUERY_KEY} from "@/constants/queryKeys.ts";

import Gallery from "@/pages/ProductPage/Gallery.tsx";
import {
    Article,
    AvailableStatus,
    Category, GalleryWrap,
    Heading, InformationBlock, InformationLabel, InformationText,
    Price,
    StyledWrapper
} from "@/pages/ProductPage/styles.ts";
import {copyToClipboard} from "@/utils/clipboard.ts";
import CloseButton from "@/layout/CloseButton/CloseButton.tsx";


const ProductPage: React.FC = () => {
    const {id} = useParams()

    const {data} = useQuery({
        queryKey: [PRODUCTS_QUERY_KEY, id],
        queryFn: async () => await getProductById(id!),
    })

    useEffect(() => {
        document.body.classList.add('no-scroll')

        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, []);

    if (!data) return <p>load..</p>;

    const availableStatus = data.available ? 'В наявності' : 'Відсутній'

    return (
        <StyledWrapper>
            <CloseButton onClick={() => window.history.back()}/>
            <GalleryWrap>
                <Gallery article={data.article}/>
            </GalleryWrap>
            <Heading>
                <Article onClick={() => copyToClipboard(data.article)}>{data.article}</Article>
                <Price>{data.price} ₴</Price>
                <Category>{data.brand} | {data.category}</Category>
                <AvailableStatus>{availableStatus}</AvailableStatus>
            </Heading>
            <InformationBlock>
                <InformationLabel>Характеристики</InformationLabel>
                <InformationText>
                    {data.design || 'Характеристики відсутні'}
                </InformationText>
                <InformationLabel>Матеріал</InformationLabel>
                <InformationText>
                    {data.materials || 'Матеріал відсутній'}
                </InformationText>
            </InformationBlock>
        </StyledWrapper>
    )
}


export default ProductPage