import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Welcome from "../pages/welcome";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    )
}