import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { MediumPrice } from '../pages/MediumPrice';

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MediumPrice />}></Route>
            </Routes>
        </BrowserRouter>
    );

}