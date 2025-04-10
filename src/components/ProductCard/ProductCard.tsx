import React from "react";
import {Link} from "react-router-dom";

import {IProductPreview} from "@/types/products";


import {Article, descriptionStyles, Image, Price, Type, Wrap} from "@/components/ProductCard/styles.tsx";

import ExpandableText from "@/components/ExpandableText/ExpandableText.tsx";

interface ProductCardProps {
    item?: IProductPreview
}

const ProductCard: React.FC<ProductCardProps> = () => {
    return (
        <Wrap as={Link} to={`/111577`}>
            <div>
                <Type>Nana Classic | Бюстгалтер</Type>
                <Article>111577</Article>
                <ExpandableText
                    component={'p'}
                    maxChars={55}
                    customStyles={descriptionStyles}
                >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit.
                </ExpandableText>
                <ExpandableText
                    component={'p'}
                    maxChars={100}
                    customStyles={descriptionStyles}
                >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi
                </ExpandableText>
                <Price>968 ₴</Price>
            </div>
            <Image/>
        </Wrap>
    )
}

export default ProductCard;