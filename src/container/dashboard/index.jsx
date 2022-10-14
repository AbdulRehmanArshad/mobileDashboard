import { useState } from "react";
import ActiveUsers from "../../component/active-user";
import Content from "../../component/content";
import OrderOverView from "../../component/order-overview";
import Projects from "../../component/projects";
import TodayDetail from "../../component/today-detail";

const Dashboard = () => {
  return (
    <>
      <div className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <div className="w-full  mx-auto">
            <TodayDetail />
            <div className="flex flex-wrap mt-2-mx-3 ">
              <Content />
              <ActiveUsers />
            </div>
            <div className="flex flex-wrap my-6 -mx-3 ">
              <Projects />
              <OrderOverView />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
