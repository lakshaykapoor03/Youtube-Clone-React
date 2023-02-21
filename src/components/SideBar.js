import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const SideBar=()=> {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
        {!isMenuOpen ? null : (
          <ul className="w-36 flex  flex-col gap-5">
            <li className=" flex  items-center text-xs cursor-pointer">
              <Link to="/"><i className="fa-sharp fa-solid fa-house mr-2"></i>Home
              </Link>
            </li>
            <li className=" flex gap-2  items-center text-xs">
              <i className="fa-regular fa-file-video"></i>Shorts
            </li>
            <li className="flex gap-2  items-center text-xs">
              <i className="fa-solid fa-circle-play items-center"></i>
              Subscriptions
            </li>
            <li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-video"></i>Library
            </li>
          </ul>
        )}
    </>
  )
}

export default SideBar