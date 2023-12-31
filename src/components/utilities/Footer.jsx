import { NavLink } from "react-router-dom";

import icon_osisfooter from "../../assets/icon-osis-1.svg";

export const Footer = () => {
  return (
    <div className="bg-white  shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={`${icon_osisfooter}`}
              className="h-8"
              alt="OSIS SMA PGRI Cicalengka"
            />
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to="/" className="hover:underline me-4 md:me-6">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" className="hover:underline me-4 md:me-6">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/News" className="hover:underline me-4 md:me-6">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className="hover:underline me-4 md:me-6">
                About Us
              </NavLink>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <NavLink to="http://www.smapgri.sch.id" className="hover:underline">
            ICT Center SMA PGRI Cicalengka
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};
