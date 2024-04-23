import React from "react";
import Avatar from "react-avatar";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <Avatar
            src="https://img.freepik.com/free-photo/view-cartoon-animated-3d-penguin_23-2150881956.jpg?t=st=1713900976~exp=1713904576~hmac=ddef8f6110e4c7674fbb46791d4edc8a0bd23a977f30352a23c3129d365801bd&w=740"
            size="50"
            round={true}
          />
          <div className="ml-2">
            <div className="flex items-center">
              <h1 className="font-bold">Sachin</h1>
              <p className="text-gray-500 text-sm ml-1">sachin@mern . 1m</p>
            </div>
            <div>
              <p>Hello, let's connect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
