import { useState } from "react";
import {useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

  const dispatch= useDispatch()
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  return (
    <>
      <div className="flex justify-between mx-5 items-center">
        <div className="flex items-center w-56">
          <span className="cursor-pointer" onClick={()=> toggleMenuHandler()}>
            <i className="fa-solid fa-bars"></i>
          </span>
          <span>
            <a href="/">
            <img
              className="w-24"
              src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Youtube-Logo-Font-3.jpg?fit=900%2C550&ssl=1"
              alt="logo"
            />
            </a>
          </span>
        </div>
        <div className=" flex items-center">
          <input
            placeholder="Search"
            className=" rounded-l-full w-[600px] p-2 border outline-none "
            type="text"
            name=""
            id=""
          />

          <span>
            <i className="fa-solid fa-search border text-base   rounded-r-full p-2 px-5"></i>
          </span>
          <span>
            <i className="fa-solid fa-microphone ml-4"></i>
          </span>
        </div>
        <div className="flex mx-2">
          <span>
            <i className="fa-solid fa-video mx-2"></i>
          </span>
          <span>
            <i className="fa-regular fa-bell mx-2"></i>
          </span>
          <span>
            <i className="fa-solid fa-circle-user mx-2"></i>
          </span>
        </div>
      </div>
   
    </>
  );
};

export default Header;
