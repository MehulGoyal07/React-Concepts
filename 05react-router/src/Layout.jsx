import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "../src/components/Footer/Footer.jsx";
import Header from "../src/components/Header/Header.jsx";

function Layout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;