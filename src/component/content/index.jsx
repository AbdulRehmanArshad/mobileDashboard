import { Link } from "react-router-dom";
import waves from "../../assets/img/illustrations/rocket-white.png";

const Content = () => {
  return (
    <>
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                  <div className="flex flex-col h-full">
                    <p className="pt-2 mb-1 font-semibold">
                      Built by developers
                    </p>
                    <h5 className="font-bold text-sm">Soft UI Dashboard</h5>
                    <p className="mb-12 text-sm">
                      From colors, cards, typography to complex elements, you
                      will find the full documentation.
                    </p>
                    <Link className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500">
                      Read More
                      <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                    </Link>
                  </div>
                </div>
                <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                  <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
                    <div className="relative flex items-center justify-center h-full">
                      <img
                        className="relative z-20 w-full pt-6"
                        src={waves}
                        alt="rocket"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
            <div className="relative h-full overflow-hidden bg-cover rounded-xl">
              <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
              <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                <h5 className="pt-2 mb-6 font-bold text-white text-sm">
                  Work with the rockets
                </h5>
                <p className="text-white text-sm">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <Link className="mt-auto mb-0 font-semibold leading-normal text-white group text-sm">
                  Read More
                  <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
