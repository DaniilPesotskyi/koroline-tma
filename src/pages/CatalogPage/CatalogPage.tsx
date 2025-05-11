import React from "react";
import {Outlet, useNavigate, useOutlet} from "react-router-dom";

import {Drawer, PageHeading} from "@/components";

import SearchBar from "@/layout/Search/Search.tsx";
import Sidebar from "@/layout/Sidebar/Sidebar.tsx";
import Filters from "@/layout/Filters/Filters.tsx";
import ProductsList from "@/pages/CatalogPage/ProductsList.tsx";
import CartButton from "@/pages/CatalogPage/CartButton.tsx";

import {drawerStyles, StyledHeader} from "@/pages/CatalogPage/styles.ts";

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
    return (
        <>
            <StyledHeader>
                <SearchBar/>
                <Sidebar/>
            </StyledHeader>

            <Filters/>

            <PageHeading>
                <PageHeading.Title>Каталог</PageHeading.Title>
            </PageHeading>

            <ProductsList/>
            <CartButton />

            <OutletContainer/>
        </>
    )
}

export default CatalogPage