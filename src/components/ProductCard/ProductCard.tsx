import React, {memo} from "react";
import {Link, useSearchParams} from "react-router-dom";

import {IProductPreview} from "@/types/products";

import {NoPhotoIcon} from "@/icons";

import {ExpandableText, IconWrapper} from "@/components";

import {
    Article,
    descriptionStyles,
    Image,
    ImageWrapper,
    noPhotoIconStyles,
    Price,
    Type,
    Wrap
} from "@/components/ProductCard/styles.tsx";

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
                <Price>{item.price_r} ₴</Price>
            </div>
            <ImageWrapper>
                {item.photo_example ? (
                    <Image src={item.photo_example}/>
                ) : (
                    <IconWrapper customStyles={noPhotoIconStyles}>
                        <NoPhotoIcon/>
                    </IconWrapper>
                )}
            </ImageWrapper>
        </Wrap>
    )
}

export default memo(ProductCard);