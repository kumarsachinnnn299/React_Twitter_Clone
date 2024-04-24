import React from "react";
import Avatar from "react-avatar";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740"
            size="50"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Sachin</h1>
              <p className="text-gray-500 text-sm ml-1">sachin@mern . 1m</p>
            </div>
            <div className="flex">
              <p>Hi, lets connect</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer"> <FaRegCommentDots size="24px" /></div>
               
                <p className="text-md">0</p>
              </div >
              <div className="flex items-center">
                <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                <FaRegHeart size="24px"/>
                </div>
                <p className=" text-md">0</p>
              </div>
              <div className="flex items-center">
              <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                <FaRegBookmark size="24px"/>
              </div>
                <p className="text-md">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
