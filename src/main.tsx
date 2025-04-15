import './index.css'

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import Providers from "@/providers/Providers.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={'/'}>
            <Providers>
                <App/>
            </Providers>
        </BrowserRouter>
    </StrictMode>,
)
