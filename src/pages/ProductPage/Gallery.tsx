// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';

import React from "react";
import {useQuery} from "@tanstack/react-query";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";

import {IProductExtended} from "@/types/products";

import {GALLERY_QUERY_KEY} from "@/constants/queryKeys.ts";

import {getProductsPhotos} from "@/api/products.ts";

import {IconWrapper} from "@/components";
import {NoPhotoIcon} from "@/icons";

import {emptyIconStyles, Image} from "@/pages/ProductPage/styles.ts";


interface IGalleryProps {
    article: IProductExtended['article']
}

const Gallery: React.FC<IGalleryProps> = ({article}) => {
    const {data, isLoading} = useQuery({
        queryKey: [GALLERY_QUERY_KEY, article],
        queryFn: async () => await getProductsPhotos(article)
    })

    if(isLoading) {
        return (
            <h2>loading..</h2>
        )
    }

    if (!data) {
        return (
            <IconWrapper customStyles={emptyIconStyles}>
                <NoPhotoIcon/>
            </IconWrapper>
        )
    }

    const colors = Object.keys(data.photo)

    const photosToRender =
        colors.length === 1
            ? Object.values(data.photo)[0]
            : Object.keys(data.photo).map(color => data.photo[color][0])

    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={20}
                centeredSlides={true}
                modules={[EffectCoverflow]}
            >
                {photosToRender.map((photo, i) => (
                    <SwiperSlide style={{maxWidth: '200px'}} key={i}>
                        <Image key={i} src={photo} alt="photo"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Gallery