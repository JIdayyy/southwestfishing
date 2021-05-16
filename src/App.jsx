import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Features from "../src/components/Features/Features";
function App() {
  const [scroll, setScroll] = useState();
  const [isZero, setIsZero] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (scroll > 1) {
      setIsZero(false);
    } else if (scroll < 1) {
      setIsZero(true);
    }
    console.log(isZero);
  }, [scroll]);

  const handleScroll = (e) => {
    setScroll(1 - e.deltaY / 100);
    console.log(scroll);
  };

  return (
    <div
      onWheel={handleScroll}
      className="w-full h-screen justify-center align-middle items-center flex flex-col"
    >
      <img
        src="./src/img/M.BAZARD FLOAT TUBE.png"
        className="fixed z-10 w-full h-full "
        alt=""
      />
      <Navbar />
      {!isZero && (
        <Home
          date={date}
          setDate={setDate}
          scroll={scroll}
          setScroll={setScroll}
        />
      )}
      {isZero && <Features date={date} setDate={setDate} />}
    </div>
  );
}

export default App;
