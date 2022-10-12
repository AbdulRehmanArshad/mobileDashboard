import React from "react";

const SaleOverView = () => {
  return (
    <>
      <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none mt-6">
        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <h6>Sales overview</h6>
            <p className="leading-normal text-sm">
              <i className="fa fa-arrow-up text-lime-500"></i>
              <span className="font-semibold">4% more</span> in 2021
            </p>
          </div>
          <div className="flex-auto p-4">
            <div>
              <canvas id="chart-line" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleOverView;
