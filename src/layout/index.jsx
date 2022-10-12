import { Outlet } from "react-router-dom";
import UpNav from "../component/up-nav";
import Footer from "./footer";
import SideBar from "./side-bar";

const Layout = () => {
  return (
    <>
      <div className='relative h-full max-h-screen rounded-xl transition-all duration-200'>
        <SideBar />
        <UpNav />
      </div>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
