import React from "react";
import "./Description.css";
import "../Home/Home";
export default function Description({ date, setDate }) {
  return (
    <div className="w-11/12 h-5/6   border-b-2 flex flex-col border-white text-8xl z-40 text-white">
      <div className="w-full h-48  myborder flex flex-col justify-end ">
        <div className="text-white  absolute transform translate-x-20 text-xl font-scada my-4">
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </div>
      </div>
      <div className="w-full h-full flex border-r-2 border-white items-center justify-center align-middle ">
        <div className="bg-black containerOpacity p-10 bg-opacity-75 w-10/12 h-5/6 flex items-center justify-around align-middle rounded-xl">
          <div className="w-6/12">
            <img
              className="w-10/12 rounded-xl"
              src="./src/img/main-pic.jpeg"
              alt=""
            />
          </div>
          <div className="w-full text-7xl text-right">
            <h1>M.BAZARD</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              deserunt distinctio iste provident. Quasi illum asperiores
              consectetur, eaque similique minus corrupti necessitatibus dolore
              alias voluptates. Veniam ex assumenda alias aliquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
