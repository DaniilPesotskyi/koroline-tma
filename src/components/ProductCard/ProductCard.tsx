import React, {memo} from "react";
import {Link, useSearchParams} from "react-router-dom";

import {IProductPreview} from "@/types/products";

import {Article, descriptionStyles, Image, Price, Type, Wrap} from "@/components/ProductCard/styles.tsx";

import ExpandableText from "@/components/ExpandableText/ExpandableText.tsx";

interface ProductCardProps {
    item: IProductPreview
}

const ProductCard: React.FC<ProductCardProps> = ({item}) => {
    const [searchParams] = useSearchParams()

    return (
        <Wrap as={Link} to={`/${item.article.replaceAll(' ', '_')}?${searchParams.toString()}`}>
            <div>
                <Type>{item.brand} | {item.category}</Type>
                <Article>{item.article}</Article>
                <ExpandableText
                    component={'p'}
                    maxChars={55}
                    customStyles={descriptionStyles}
                >
                    {item.design ? item.design : 'Опис відсутній'}
                </ExpandableText>
                <ExpandableText
                    component={'p'}
                    maxChars={100}
                    customStyles={descriptionStyles}
                >
                    {item.materials ? item.materials : 'Матеріал відсутній'}
                </ExpandableText>
                <Price>{item.price} ₴</Price>
            </div>
            <Image src={item.photo_example}/>
        </Wrap>
    )
}

export default memo(ProductCard);