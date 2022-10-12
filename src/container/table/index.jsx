import React from "react";
import team2 from "../../assets/img/team-2.jpg";
import team3 from "../../assets/img/team-3.jpg";
import team4 from "../../assets/img/team-4.jpg";
import slack from "../../assets/img/small-logos/logo-slack.svg";
import spotify from "../../assets/img/small-logos/logo-spotify.svg";
import jira from "../.././assets/img/small-logos/logo-jira.svg";
import ini from "../.././assets/img/small-logos/logo-invision.svg";
import logoXxd from "../../assets/img/small-logos/logo-xd.svg";

const Table = () => {
  return (
    <>
      <div className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <nav
            className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
            navbar-scroll="true"
          >
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
              <nav>
                <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                  <li className="leading-normal text-sm">
                    <a className="opacity-50 text-slate-700" href="">
                      Pages
                    </a>
                  </li>
                  <li
                    className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
                    aria-current="page"
                  >
                    Tables
                  </li>
                </ol>
                <h6 className="mb-0 font-bold capitalize">Tables</h6>
              </nav>
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                <div className="flex items-center md:ml-auto md:pr-4">
                  <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                    <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                  <li className="flex items-center">
                    <a
                      className="inline-block px-8 py-2 mb-0 mr-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro border-fuchsia-500 ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs text-fuchsia-500 hover:border-fuchsia-500 active:bg-fuchsia-500 active:hover:text-fuchsia-500 hover:text-fuchsia-500 tracking-tight-soft hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent"
                      target="_blank"
                      href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053"
                    >
                      Online Builder
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="../pages/sign-in.html"
                      className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500"
                    >
                      <i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
                      <span className="hidden sm:inline">Sign In</span>
                    </a>
                  </li>
                  <li className="flex items-center pl-4 xl:hidden">
                    <a
                      href=""
                      className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
                    >
                      <div className="w-4.5 overflow-hidden">
                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                        <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center px-4">
                    <a
                      href=""
                      className="p-0 transition-all text-sm ease-nav-brand text-slate-500"
                    >
                      <i
                        className="cursor-pointer fa fa-cog"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="relative flex items-center pr-2">
                    <p className="hidden transform-dropdown-show"></p>
                    <a
                      href=""
                      className="block p-0 transition-all text-sm ease-nav-brand text-slate-500"
                      aria-expanded="false"
                    >
                      <i
                        className="cursor-pointer fa fa-bell"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <ul className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                      <li className="relative mb-2">
                        <a
                          className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                          href=""
                        >
                          <div className="flex py-1">
                            <div className="my-auto">
                              <img
                                src={team2}
                                className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 font-normal leading-normal text-sm">
                                <span className="font-semibold">
                                  New message
                                </span>{" "}
                                from Laur
                              </h6>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                <i
                                  className="mr-1 fa fa-clock"
                                  aria-hidden="true"
                                ></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="relative mb-2">
                        <a
                          className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                          href=""
                        >
                          <div className="flex py-1">
                            <div className="my-auto">
                              <img
                                src={spotify}
                                className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 font-normal leading-normal text-sm">
                                <span className="font-semibold">New album</span>{" "}
                                by Travis Scott
                              </h6>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                <i
                                  className="mr-1 fa fa-clock"
                                  aria-hidden="true"
                                ></i>
                                1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="relative">
                        <a
                          className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                          href=""
                        >
                          <div className="flex py-1">
                            <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fillRule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                          className="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          opacity="0.593633743"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 font-normal leading-normal text-sm">
                                Payment successfully completed
                              </h6>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                <i
                                  className="mr-1 fa fa-clock"
                                  aria-hidden="true"
                                ></i>
                                2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6>Authors table</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Author
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Function
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Status
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Employed
                            </th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={team2}
                                    className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                    alt="user1"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    John Michael
                                  </h6>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">
                                    john@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-tight text-xs">
                                Manager
                              </p>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                Organization
                              </p>
                            </td>
                            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Online
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs text-slate-400">
                                23/04/18
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <a
                                href=""
                                className="font-semibold leading-tight text-xs text-slate-400"
                              >
                                {" "}
                                Edit{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={team3}
                                    className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                    alt="user2"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Alexa Liras
                                  </h6>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">
                                    alexa@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-tight text-xs">
                                Programator
                              </p>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                Developer
                              </p>
                            </td>
                            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Offline
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs text-slate-400">
                                11/01/19
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <a
                                href=""
                                className="font-semibold leading-tight text-xs text-slate-400"
                              >
                                {" "}
                                Edit{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={team4}
                                    className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                    alt="user3"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Laurent Perrier
                                  </h6>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">
                                    laurent@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-tight text-xs">
                                Executive
                              </p>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                Projects
                              </p>
                            </td>
                            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Online
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs text-slate-400">
                                19/09/17
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <a
                                href=""
                                className="font-semibold leading-tight text-xs text-slate-400"
                              >
                                {" "}
                                Edit{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={team3}
                                    className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                    alt="user4"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Michael Levi
                                  </h6>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">
                                    michael@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-tight text-xs">
                                Programator
                              </p>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                Developer
                              </p>
                            </td>
                            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Online
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs text-slate-400">
                                24/12/08
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <a
                                href=""
                                className="font-semibold leading-tight text-xs text-slate-400"
                              >
                                {" "}
                                Edit{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={team2}
                                    className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                    alt="user5"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Richard Gran
                                  </h6>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">
                                    richard@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-tight text-xs">
                                Manager
                              </p>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                Executive
                              </p>
                            </td>
                            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Offline
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs text-slate-400">
                                04/10/21
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <a
                                href=""
                                className="font-semibold leading-tight text-xs text-slate-400"
                              >
                                {" "}
                                Edit{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={team4}
                                    className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                    alt="user6"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Miriam Eric
                                  </h6>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">
                                    miriam@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-tight text-xs">
                                Programtor
                              </p>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                Developer
                              </p>
                            </td>
                            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b-0 text-sm whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Offline
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs text-slate-400">
                                14/09/20
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <a
                                href=""
                                className="font-semibold leading-tight text-xs text-slate-400"
                              >
                                {" "}
                                Edit{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6>Projects table</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Project
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Budget
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Status
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                              Completion
                            </th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2">
                                <div>
                                  <img
                                    src={spotify}
                                    className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9"
                                    alt="spotify"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Spotify
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-normal text-sm">
                                $2,500
                              </p>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs">
                                working
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex items-center justify-center">
                                <span className="mr-2 font-semibold leading-tight text-xs">
                                  60%
                                </span>
                                <div>
                                  <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                    <div
                                      className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                      role="progressbar"
                                      aria-valuenow="60"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400">
                                <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2">
                                <div>
                                  <img
                                    src={ini}
                                    className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9"
                                    alt="invision"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Invision
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-normal text-sm">
                                $5,000
                              </p>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs">
                                done
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex items-center justify-center">
                                <span className="mr-2 font-semibold leading-tight text-xs">
                                  100%
                                </span>
                                <div>
                                  <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                    <div
                                      className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                      role="progressbar"
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <button
                                className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2">
                                <div>
                                  <img
                                    src={jira}
                                    className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9"
                                    alt="jira"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Jira
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-normal text-sm">
                                $3,400
                              </p>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs">
                                canceled
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex items-center justify-center">
                                <span className="mr-2 font-semibold leading-tight text-xs">
                                  30%
                                </span>
                                <div>
                                  <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                    <div
                                      className="duration-600 ease-soft bg-gradient-to-tl from-red-600 to-rose-400 -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                      role="progressbar"
                                      aria-valuenow="30"
                                      aria-valuemin="0"
                                      aria-valuemax="30"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <button
                                className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2">
                                <div>
                                  <img
                                    src={slack}
                                    className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9"
                                    alt="slack"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Slack
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-normal text-sm">
                                $1,000
                              </p>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs">
                                canceled
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex items-center justify-center">
                                <span className="mr-2 font-semibold leading-tight text-xs">
                                  0%
                                </span>
                                <div>
                                  <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                    <div
                                      className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-0 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                      role="progressbar"
                                      aria-valuenow="0"
                                      aria-valuemin="0"
                                      aria-valuemax="0"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <button
                                className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex px-2">
                                <div>
                                  <img
                                    src={jira}
                                    className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9"
                                    alt="webdev"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Webdev
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-normal text-sm">
                                $14,000
                              </p>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs">
                                working
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <div className="flex items-center justify-center">
                                <span className="mr-2 font-semibold leading-tight text-xs">
                                  80%
                                </span>
                                <div>
                                  <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                    <div
                                      className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-4/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                      role="progressbar"
                                      aria-valuenow="80"
                                      aria-valuemin="0"
                                      aria-valuemax="80"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <button
                                className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2">
                                <div>
                                  <img
                                    src={logoXxd}
                                    className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9"
                                    alt="xd"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 leading-normal text-sm">
                                    Adobe XD
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 font-semibold leading-normal text-sm">
                                $2,300
                              </p>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <span className="font-semibold leading-tight text-xs">
                                done
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <div className="flex items-center justify-center">
                                <span className="mr-2 font-semibold leading-tight text-xs">
                                  100%
                                </span>
                                <div>
                                  <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                    <div
                                      className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                      role="progressbar"
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <button
                                className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="pt-4">
              <div className="w-full px-6 mx-auto">
                <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
                      made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-semibold text-slate-700"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
        <div>
          <a className="bottom-7.5 right-7.5 text-xl z-990 shadow-soft-lg rounded-circle fixed cursor-pointer bg-white px-4 py-2 text-slate-700">
            <i className="py-2 pointer-events-none fa fa-cog"> </i>
          </a>
          <div className="z-sticky shadow-soft-3xl w-90 ease-soft -right-90 fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200">
            <div className="px-6 pt-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
              <div className="float-left">
                <h5 className="mt-4 mb-0">Soft UI Configurator</h5>
                <p>See our dashboard options.</p>
              </div>
              <div className="float-right mt-6">
                <button className="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700">
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </div>
            <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
            <div className="flex-auto p-6 pt-0 sm:pt-4">
              <div>
                <h6 className="mb-0">Sidebar Colors</h6>
              </div>
              <a href="">
                <div className="my-2 text-left">
                  <span
                    className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-purple-700 to-pink-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                    data-color-from="purple-700"
                    data-color-to="pink-500"
                  ></span>
                  <span
                    className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-gray-900 to-slate-800 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                    data-color-from="gray-900"
                    data-color-to="slate-800"
                  ></span>
                  <span
                    className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-blue-600 to-cyan-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                    data-color-from="blue-600"
                    data-color-to="cyan-400"
                  ></span>
                  <span
                    className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-green-600 to-lime-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                    data-color-from="green-600"
                    data-color-to="lime-400"
                  ></span>
                  <span
                    className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-red-500 to-yellow-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                    data-color-from="red-500"
                    data-color-to="yellow-400"
                  ></span>
                  <span
                    className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-red-600 to-rose-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                    data-color-from="red-600"
                    data-color-to="rose-400"
                  ></span>
                </div>
              </a>
              <div className="mt-4">
                <h6 className="mb-0">Sidenav Type</h6>
                <p className="leading-normal text-sm">
                  Choose between 2 different sidenav types.
                </p>
              </div>
              <div className="flex">
                <button className="inline-block w-full px-4 py-3 mb-2 font-bold text-center text-white uppercase align-middle transition-all border border-transparent border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-purple-700 to-pink-500 bg-fuchsia-500 hover:border-fuchsia-500">
                  Transparent
                </button>
                <button className="inline-block w-full px-4 py-3 mb-2 ml-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 border-fuchsia-500 bg-none text-fuchsia-500 hover:border-fuchsia-500">
                  White
                </button>
              </div>
              <p className="block mt-2 leading-normal text-sm xl:hidden">
                You can change the sidenav type just on desktop view.
              </p>
              <div className="mt-4">
                <h6 className="mb-0">Navbar Fixed</h6>
              </div>
              <div className="min-h-6 mb-0.5 block pl-0">
                <input
                  className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                  type="checkbox"
                />
              </div>
              <hr className="h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent sm:my-6" />
              <a
                className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer leading-pro text-xs ease-soft-in hover:shadow-soft-xs hover:scale-102 active:opacity-85 tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800"
                href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                target="_blank"
              >
                Free Download
              </a>
              <a
                className="inline-block w-full px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
                href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/"
                target="_blank"
              >
                View documentation
              </a>
              <div className="w-full text-center">
                <h6 className="mt-4">Thank you for sharing!</h6>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20Tailwind%20made%20by%20%40CreativeTim&hashtags=webdesign,dashboard,tailwindcss&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-tailwind"
                  className="inline-block px-6 py-3 mb-0 mr-2 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="mr-1 fab fa-twitter"
                    aria-hidden="true"
                  ></i>{" "}
                  Tweet{" "}
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                  className="inline-block px-6 py-3 mb-0 mr-2 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="mr-1 fab fa-facebook-square"
                    aria-hidden="true"
                  ></i>{" "}
                  Share{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
