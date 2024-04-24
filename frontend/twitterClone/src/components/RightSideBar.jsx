import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSideBar = () => {
  return (
    <div className="w-[25%]">
      <div className="flex items-center p-3 bg-gray-200 rounded-full outline-none ">
        <CiSearch size="24px" />
        <input
          className="bg-transparent outline-none px-2"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg flex">Who to follow</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740"
                size="50"
                round={true}
              />
            </div>
            <div className=" ml-2">
              <h1 className="flex font-bold">Yanu</h1>
              <p className="text-sm">@enigmatic.yo</p>
            </div>
          </div>
          <div >
            <button className="px-4 py-1 bg-black rounded-full text-white">Profile</button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740"
                size="50"
                round={true}
              />
            </div>
            <div className=" ml-2">
              <h1 className="flex font-bold">Yanu</h1>
              <p className="text-sm">@enigmatic.yo</p>
            </div>
          </div>
          <div >
            <button className="px-4 py-1 bg-black rounded-full text-white">Profile</button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740"
                size="50"
                round={true}
              />
            </div>
            <div className=" ml-2">
              <h1 className="flex font-bold">Yanu</h1>
              <p className="text-sm">@enigmatic.yo</p>
            </div>
          </div>
          <div >
            <button className="px-4 py-1 bg-black rounded-full text-white">Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
