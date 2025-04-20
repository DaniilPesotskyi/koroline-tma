import React from "react";
import {Outlet, useOutlet} from "react-router-dom";

import {Drawer, PageHeading} from "@/components";

import ProductsList from "@/pages/CatalogPage/ProductsList.tsx";
import Categories from "@/pages/CatalogPage/Categories.tsx";

import {drawerStyles} from "@/pages/CatalogPage/styles.ts";

const CatalogPage: React.FC = () => {
    const outlet = useOutlet();

    return (
        <>
            <Categories/>

            <PageHeading>
                <PageHeading.Title>Каталог</PageHeading.Title>
            </PageHeading>

            <ProductsList/>

            <Drawer
                customStyles={drawerStyles}
                open={Boolean(outlet)}
                onClose={() => window.history.back()}
                position={"bottom"}>
                <>
                    <Outlet/>
                </>
            </Drawer>
        </>
    )
}

export default CatalogPage