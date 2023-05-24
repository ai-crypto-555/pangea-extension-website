import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Welcome from "../pages/welcome";
import Login from "../pages/login";
import LoginByEmail from "../pages/login1";

import SignupByEmail from "../pages/signup1";
import Price from "../pages/price";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginByEmail" element={<LoginByEmail />} />
                <Route path="/signupByEmail" element={<SignupByEmail />} />
                <Route path="/price" element={<Price />} />
            </Routes>
        </BrowserRouter>
    )
}