import { faArrowLeft, faBars, faCalendar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const {user} = useSelector(state => state.auth)
  const [dropDown, setDropDown] = useState(false);
  const onDropDown = () => {
    setDropDown(!dropDown);
  };

  const { handleSignOut } = useAuthStore()

  return (
    <nav className="transition rounded-b shadow-md bg-green-500 mb-12 pt-1 md:pt-0">
      {/* DESKTOP */}
      <div className="flex-row justify-between h-16 px-5 hidden md:flex">
        <div className="w-2/3">
          <ul className="h-full flex flex-row justify-around  items-center xl:pr-96 lg:pr-64 md:pr-28">
            <li className="w-full flex flex-row">
                <FontAwesomeIcon icon={faCalendar}  className="text-2xl text-white m-3"/>
                <h3 className="my-3 font-bold text-white"> {user.displayName} </h3>
            </li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-row justify-end items-center cursor-pointer">
        <span onClick={handleSignOut} className="text-white flex flex-row justify-end items-center cursor-pointer hover:font-bold hover:text-green-800">
              <FontAwesomeIcon  icon={faArrowLeft} /> Logout
        </span>
        </div>
      </div>

      {/* MOBILE */}

      <div className="h-auto px-5 md:hidden">
        <div className="flex flex-row justify-between items-center h-14">
          <div className="w-1/3">
            {dropDown ? (
              <FontAwesomeIcon className="text-white" icon={faXmark} />
            ) : (
              <FontAwesomeIcon className="text-white" icon={faBars} />
            )}
          </div>
          <div className="w-1/3 flex justify-center">
            <FontAwesomeIcon icon={faCalendar}  className="text-3xl text-white m-3"/>
          </div>
          <div className="w-1/3 ">
            <span onClick={handleSignOut} className="text-white flex flex-row justify-end items-center cursor-pointer hover:font-bold">
              <FontAwesomeIcon className="text-white" icon={faArrowLeft} /> Logout
            </span>
          </div>
        </div>
        {/* DROPDOWN MENU */}
        {dropDown && <div className="pt-5 pb-5"></div>}
      </div>
    </nav>
  );
};
