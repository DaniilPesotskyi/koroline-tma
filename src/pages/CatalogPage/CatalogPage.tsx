import React, {useEffect} from "react";
import {Outlet, useNavigate, useOutlet} from "react-router-dom";

import {Drawer, PageHeading} from "@/components";

import Sidebar from "@/layout/Sidebar/Sidebar.tsx";
import Filters from "@/layout/Filters/Filters.tsx";
import ProductsList from "@/pages/CatalogPage/ProductsList.tsx";
import CartButton from "@/pages/CatalogPage/CartButton.tsx";

import {drawerStyles, StyledHeader, Title} from "@/pages/CatalogPage/styles.ts";
import {useTelegram} from "@/hooks";

const OutletContainer: React.FC = () => {
    const outlet = useOutlet();
    const navigate = useNavigate();

    return (
        <Drawer
            customStyles={drawerStyles}
            open={Boolean(outlet)}
            onClose={() => navigate(-1)}
            position={"bottom"}>
            <>
                <Outlet/>
            </>
        </Drawer>
    )
}

const CatalogPage: React.FC = () => {
    const {telegram, theme} = useTelegram()

    useEffect(() => {
        telegram.setHeaderColor(theme.secondary_bg_color)
        telegram.setBackgroundColor(theme.secondary_bg_color)
    }, [telegram, theme]);

    return (
        <>
            <StyledHeader>
                <Title>KOROLINE</Title>
                <Sidebar/>
            </StyledHeader>

            <Filters/>

            <PageHeading>
                <PageHeading.Title>Каталог</PageHeading.Title>
            </PageHeading>

            <ProductsList/>
            <CartButton/>

            <OutletContainer/>
        </>
    )
}

export default CatalogPage