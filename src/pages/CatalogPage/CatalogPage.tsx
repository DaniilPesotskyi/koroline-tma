import React from "react";
import {Outlet} from "react-router-dom";

const CatalogPage: React.FC = () => {
    return (
        <>
            <h1>Catalog</h1>
            <Outlet/>
        </>
    )
}

export default CatalogPage