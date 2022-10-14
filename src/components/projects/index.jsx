import projectData from "./project-data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
      <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
          <div className="flex flex-wrap mt-0 -mx-3">
            <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
              <h6>Projects</h6>
              <p className="mb-0 leading-normal text-sm">
                <i className="fa fa-check text-cyan-500"></i>
                <span className="ml-1 font-semibold">30 done</span>
                this month
              </p>
            </div>
            <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
              <div className="relative pr-6 lg:float-right">
                <Link className="cursor-pointer" aria-expanded="false">
                  <i className="fa fa-ellipsis-v text-slate-400"></i>
                </Link>
                <p className="hidden transform-dropdown-show"></p>
                <ul className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']">
                  <li className="relative">
                    <Link className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300">
                      Action
                    </Link>
                  </li>
                  <li className="relative">
                    <Link className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300">
                      Another action
                    </Link>
                  </li>
                  <li className="relative">
                    <Link className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-6 px-0 pb-2">
          <div className="overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                    Companies
                  </th>
                  <th className="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                    Members
                  </th>
                  <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                    Budget
                  </th>
                  <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                    Completion
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((el) => {
                  return (
                    <>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src={el.img}
                                className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                alt="invision"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 leading-normal text-xxs">
                                {el.tittle}{" "}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                          <div className="mt-2 ml-5 avatar-group">
                            {el.member.map((_) => {
                              return (
                                <>
                                  <Link
                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                    data-target="tooltip_trigger"
                                    data-placement="bottom"
                                  >
                                    <img
                                      src={_}
                                      className="w-full rounded-full"
                                      alt="user7"
                                    />
                                  </Link>
                                  <div
                                    data-target="tooltip"
                                    className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                    role="tooltip"
                                  >
                                    Jessica Doe
                                    <div
                                      className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                      data-popper-arrow
                                    ></div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </td>

                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap">
                          <span className="font-semibold leading-tight text-xs">
                            ${el.budget}
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                          <div className="w-3/4 mx-auto">
                            <div>
                              <div>
                                <span className="font-semibold leading-tight text-xs">
                                  {el.progressBar}%
                                </span>
                              </div>
                            </div>
                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                              <div
                                style={{ width: el.progressBar }}
                                className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5  flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                role="progressbar"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="40"
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
