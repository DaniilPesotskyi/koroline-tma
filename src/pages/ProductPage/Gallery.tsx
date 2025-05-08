// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';

import React from "react";
import {useQuery} from "@tanstack/react-query";
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";

import {IProductExtended} from "@/types/products";

import {GALLERY_QUERY_KEY} from "@/constants/queryKeys.ts";

import {getProductsPhotos} from "@/api/products.ts";

import {IconWrapper, Loader} from "@/components";
import {NoPhotoIcon} from "@/icons";

import {emptyIconStyles, galleryLoaderStyles, Image, NoImageWrapper} from "@/pages/ProductPage/styles.ts";

interface IGalleryProps {
    article: IProductExtended['article']
}

const variants = {
    initial: {
        y: 25,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    }
}

const Gallery: React.FC<IGalleryProps> = ({article}) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: [GALLERY_QUERY_KEY, article],
        queryFn: async () => await getProductsPhotos(article)
    })

    if (isLoading) {
        return (
            <Loader show={true} customStyles={galleryLoaderStyles}/>
        )
    }

    if (!data || isError) {
        return (
            <NoImageWrapper>
                <IconWrapper customStyles={emptyIconStyles}>
                    <NoPhotoIcon/>
                </IconWrapper>
            </NoImageWrapper>
           
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
                    slideShadows: false,
                }}
                spaceBetween={20}
                centeredSlides={true}
                modules={[EffectCoverflow]}
            >
                {photosToRender.map((photo, i) => (
                    <SwiperSlide style={{maxWidth: '200px'}} key={i}>
                        <motion.div variants={variants} initial='initial' animate='animate'
                                    transition={{delay: 0.2 * i}}>
                            <Image key={i} src={photo} alt="photo"/>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Gallery