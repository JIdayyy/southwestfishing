import React from "react";

export default function Navbar() {
  return (
    <div className=" flex flex-col fixed top-0 items-center justify-center  w-full z-50">
      <div className="bg-header-bg bg-cover align-top text-white w-full h-full flex flex-col  items-center justify-center text-3xl">
        <div className="flex flex-row items-center absolute top-5 justify-center align-middle">
          <a
            href=""
            className="mx-2 border-b-2 border-transparent hover:border-white "
          >
            Accueil
          </a>
          <a
            href=""
            className="mx-2 border-b-2 border-transparent hover:border-white "
          >
            A Propos
          </a>
          <div>
            <img className="w-36" src="./src/img/SOUTH WEST.png" alt=""></img>
          </div>
          <a
            href=""
            className="mx-2 border-b-2 border-transparent hover:border-white "
          >
            Guidage
          </a>
          <a
            href=""
            className="mx-2 border-b-2 border-transparent hover:border-white "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
