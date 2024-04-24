import React from "react";
import { IoMdArrowBack } from "react-icons/io";


const Profile = () => {
  return (
    <div className="w-[50%]">
      <div>
        <div className="flex items-center">
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <IoMdArrowBack size="24px"/>
            </div>
          <div>
          <h1>Sachin</h1>
            <p>10 post</p>
          </div>
        </div>
        <img src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740" alt="Profile Picture" />
      </div>
    </div>
  );
};

export default Profile;
