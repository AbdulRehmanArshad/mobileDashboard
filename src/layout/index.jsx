import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../component/side-bar';

const Layout = () => {
    return (
        <>
            <SideBar />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Layout;