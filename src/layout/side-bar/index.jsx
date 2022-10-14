import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-ct.png";
import { sidebarData } from "./data";

const SideBar = () => {
  return (
    <>
      <div className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
        <div className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
          <div className="">
            <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"></i>
            <Link
              className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
              target="_blank"
            >
              <img
                src={logo}
                className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
                alt="main_logo"
              />
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
                Soft UI Dashboard
              </span>
            </Link>
          </div>
          <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
          <div className="items-center block w-auto max-h-screen  grow basis-full">
            <ul className="flex flex-col pl-0 mb-0">
              {sidebarData.map((el) => {
                return (
                  <>
                    <li key={el.id} className="mt-0.5 w-full">
                      <Link
                        className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                        to={el.link}
                      >
                        <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                          <img src={el.img} alt={el.alt} />
                        </div>
                        <span className="ml-1 text-xs duration-300 opacity-100 pointer-events-none ease-soft">
                          {el.name}
                        </span>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
