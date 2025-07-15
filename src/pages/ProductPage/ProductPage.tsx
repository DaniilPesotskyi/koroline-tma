import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import {getProductById} from "@/api/products.ts";

import {PRODUCTS_QUERY_KEY} from "@/constants/queryKeys.ts";

import {copyToClipboard} from "@/utils/clipboard.ts";

import {useTelegram} from "@/hooks";

import {SearchIcon} from "@/icons";

import {Drawer, IconWrapper, Loader} from "@/components";

import Gallery from "@/pages/ProductPage/Gallery.tsx";
import CloseButton from "@/layout/CloseButton/CloseButton.tsx";
import OrderMenu from "@/pages/ProductPage/OrderMenu.tsx";

import {
    Article,
    AvailableStatus,
    Category,
    GalleryWrap,
    Heading,
    InformationBlock,
    InformationLabel,
    InformationText,
    NoProductFoundBlock, noProductFoundIconStyles,
    orderBackdropStyles,
    orderDrawerStyles,
    Price,
    StyledWrapper
} from "@/pages/ProductPage/styles.ts";

const ProductPage: React.FC = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {
        addMainButtonHandler,
        showMainButton,
        hideMainButton,
        addBackButtonHandler,
        showBackButton,
        hideBackButton
    } = useTelegram()

    const [orderMenuOpen, setOrderMenuOpen] = useState<boolean>(false)

    const {data, isLoading, isError} = useQuery({
        queryKey: [PRODUCTS_QUERY_KEY, id],
        queryFn: async () => await getProductById(id!),
    })

    useEffect(() => {
        document.body.classList.add('no-scroll')
        return () => {
            document.body.classList.remove('no-scroll')
            hideBackButton()
            hideMainButton()
        }
    }, []);

    const toggleOrderMenu = () => {
        setOrderMenuOpen(!orderMenuOpen);
    }

    useEffect(() => {
        let unsubscribeMainButton: (() => void) | undefined;
        let unsubscribeBackButton: (() => void) | undefined;

        if (!orderMenuOpen) {
            unsubscribeMainButton = addMainButtonHandler(toggleOrderMenu, 'ДОДАТИ ДО КОШИКА');
            unsubscribeBackButton = addBackButtonHandler(() => navigate(-1))

            showMainButton()
            showBackButton()
        }

        return () => {
            if (unsubscribeMainButton) {
                unsubscribeMainButton();
            }
            if (unsubscribeBackButton) {
                unsubscribeBackButton();
            }
        };
    }, [orderMenuOpen])

    if (isLoading) return <Loader show={true}/>;
    if (isError || !data) return (
        <NoProductFoundBlock>
            <IconWrapper customStyles={noProductFoundIconStyles}>
                <SearchIcon/>
            </IconWrapper>
            <p>Ми не змогли знайти товар з артикулом <i>{id}</i></p>
        </NoProductFoundBlock>
    );

    const availableStatus = data.available ? 'В наявності' : 'Відсутній'

    return (
        <>
            <StyledWrapper>
                <CloseButton onClick={() => navigate(-1)}/>
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

                <Drawer
                    open={orderMenuOpen}
                    onClose={toggleOrderMenu}
                    position={'bottom'}
                    customStyles={orderDrawerStyles}
                    backdropCustomStyles={orderBackdropStyles}
                >
                    <OrderMenu product={data} onClose={toggleOrderMenu}/>
                </Drawer>

            </StyledWrapper>

        </>
    )
}


export default ProductPage