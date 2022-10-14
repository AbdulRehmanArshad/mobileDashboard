import { Outlet } from "react-router-dom";
import Footer from "./footer";
import SideBar from "./side-bar";
import UpNav from "./up-nav";

const Layout = () => {
  return (
    <>
      <div className='relative h-full max-h-screen rounded-xl bg-gray-50 transition-all duration-200'>
        <SideBar />
        <UpNav />
      </div>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
