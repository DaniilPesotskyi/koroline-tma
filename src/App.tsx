import {Route, Routes} from "react-router-dom";

import {useTelegram} from "@/hooks";

import RootLayout from "./layout/RootLayout/RootLayout.tsx";

import ProductPage from "./pages/ProductPage/ProductPage.tsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.tsx";
import CartPage from "./pages/CartPage/CartPage.tsx";
import HelpPage from "./pages/HelpPage/HelpPage.tsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.tsx";

function App() {
    const {telegram} = useTelegram()

    telegram.MainButton.setParams({
        color: '#25b672',
        has_shine_effect: true
    })
    telegram.isVerticalSwipesEnabled = false
    telegram.expand()

    return (
        <Routes>
            <Route path="/" element={<RootLayout/>}>
                <Route path={'/'} element={<CatalogPage/>}>
                    <Route path="/:id" element={<ProductPage/>}/>
                </Route>
                <Route path={'/favorites'} element={<FavoritesPage/>}/>
                <Route path={'/cart'} element={<CartPage/>}/>
                <Route path={'/help'} element={<HelpPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
