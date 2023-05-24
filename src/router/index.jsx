import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Welcome from "../pages/welcome";
import Login from "../pages/login";
import LoginByEmail from "../pages/login1";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginByEmail" element={<LoginByEmail />} />
            </Routes>
        </BrowserRouter>
    )
}