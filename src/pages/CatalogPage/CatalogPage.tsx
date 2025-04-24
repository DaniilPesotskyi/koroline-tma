import React from "react";
import {Outlet, useOutlet} from "react-router-dom";

import {Drawer, PageHeading} from "@/components";

import SearchBar from "@/layout/Search/Search.tsx";
import Sidebar from "@/layout/Sidebar/Sidebar.tsx";
import ProductsList from "@/pages/CatalogPage/ProductsList.tsx";
import Categories from "@/pages/CatalogPage/Categories.tsx";

import {drawerStyles, StyledHeader} from "@/pages/CatalogPage/styles.ts";

const OutletContainer: React.FC = () => {
    const outlet = useOutlet();

    return (
        <Drawer
            customStyles={drawerStyles}
            open={Boolean(outlet)}
            onClose={() => window.history.back()}
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

            <Categories/>

            <PageHeading>
                <PageHeading.Title>Каталог</PageHeading.Title>
            </PageHeading>

            <ProductsList/>

            <OutletContainer/>
        </>
    )
}

export default CatalogPage