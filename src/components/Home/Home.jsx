import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

export default function Home({ scroll, setScroll, date, setDate }) {
  const handleScroll = (e) => {
    setScroll(1 - e.deltaY / 100);
    console.log(scroll);
  };

  return (
    <div
      style={{ opacity: scroll }}
      className="
      h-screen flex flex-col items-center align-middle justify-center z-30 w-full"
    >
      <div className="w-11/12 h-5/6 myborder flex   items-end  z-30">
        <div className="text-white absolute transform translate-x-20 text-xl font-scada my-4">
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </div>
        <div className="text-white mx-10  flex text-xl font-scada ">
          <p className="w-96">Scroll Down To Continue</p>
          <img
            src="./src/img/white-down-arrow-png-2 1.png"
            className="cursor-pointer w-20 bounce "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
