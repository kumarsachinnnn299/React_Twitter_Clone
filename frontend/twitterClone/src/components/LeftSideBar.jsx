import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const LeftSideBar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="ml-4"
            width="24px"
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png"
            alt="twitterlogo"
          />
        </div>
      </div>
      <div className="my-4 ">
        <div className="flex items-center rounded-full my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer ">
          <div>
            <CiHome size="24px" />
          </div>
          <h1 className="font-bold text-lg ml-2">Home</h1>
        </div>
        <div className="flex items-center rounded-full my-2 hover:bg-gray-100 cursor-pointer px-4 py-2">
          <div>
            <CiHashtag size="24px" />
          </div>
          <h1 className="font-bold text-lg ml-2">Explore</h1>
        </div>
        <div className="flex items-center rounded-full my-2 hover:bg-gray-100 cursor-pointer px-4 py-2">
          <div>
            <IoIosNotificationsOutline size="24px" />
          </div>
          <h1 className="font-bold text-lg ml-2">Notification</h1>
        </div>
        <div className="flex items-center rounded-full my-2 hover:bg-gray-100 cursor-pointer px-4 py-2">
          <div>
            <CiUser size="24px" />
          </div>
          <h1 className="font-bold text-lg ml-2">Profile</h1>
        </div>
        <div className="flex items-center rounded-full my-2 hover:bg-gray-100 cursor-pointer px-4 py-2">
          <div>
            <CiBookmark size="24px" />
          </div>
          <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
        </div>
        <div className="flex items-center rounded-full my-2 hover:bg-gray-100 cursor-pointer px-4 py-2">
          <div>
            <AiOutlineLogout size="24px" />
          </div>
          <h1 className="font-bold text-lg ml-2">Logout</h1>
        </div>
        <div>
          <button className="rounded-full px-4 py-2 border-none text-md bg-[#1D9Bf0] w-full text-white font-bold text-lg">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
