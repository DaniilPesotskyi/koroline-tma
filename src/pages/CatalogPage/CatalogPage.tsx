import React from "react";
import {Outlet} from "react-router-dom";

import {PageHeading} from "@/components";

import ProductsList from "@/pages/CatalogPage/ProductsList.tsx";
import Categories from "@/pages/CatalogPage/Categories.tsx";

const CatalogPage: React.FC = () => {

    return (
        <>
            <Categories/>

            <PageHeading>
                <PageHeading.Title>Каталог</PageHeading.Title>
            </PageHeading>

            <ProductsList/>

            <Outlet/>
        </>
    )
}

export default CatalogPage