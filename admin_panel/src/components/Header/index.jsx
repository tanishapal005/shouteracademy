

import React from "react";
import { BsFillBellFill, BsCloudMoon } from "react-icons/bs";
import FullScreen from "../FullScreen";
import Profile from "../Profile";
import NotificationIcon from "../NotificationIcon";


function Header() {
  return (
    <div className="bg-white h-[4.5rem] w-full lg:w-[calc(100%-16rem)] flex items-center justify-between px-4 lg:px-8 fixed top-0 left-64 text-lg z-20 shadow-md">
      {/* Search Bar */}
      <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-black rounded-2xl placeholder:text-black w-32 sm:w-48 md:w-64 lg:w-full h-10 px-4 outline-none text-black ml-11 sm:ml-0"
        />
      </div>

      {/* Right Icons */}
      <div className="flex space-x-4 sm:space-x-6 lg:space-x-9 items-center">
        <FullScreen />
        <BsCloudMoon className="size-6 cursor-pointer hover:scale-125 transform duration-100 text-black" />
        <NotificationIcon />
        <Profile />
      </div>
    </div>
  );
}

export default Header;