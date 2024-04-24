import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-between border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div >
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740"
                size="50"
                round={true}
              />
            </div>
            <input type="text" className="w-full outline-none border-none text-xl ml-2" placeholder="What is happening?"/>
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div>
                <CiImageOn size="24px"/>
            </div>
            <button className="bg-[#1D9Bf0] px-4 py-1 text-lg text-white border-none rounded-full">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
