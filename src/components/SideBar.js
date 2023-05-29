import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const SideBar=()=> {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="mt-20  bg-white">
        {!isMenuOpen ? null : (
        <div>
          <div>
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
          </div>
           <div>
           <h2 className="mt-8">Explore</h2>
           <ul className="w-36 flex  flex-col gap-5 mt-4">
            <li className=" flex  items-center text-xs cursor-pointer">
              <Link to={"/results?q=Trending"}><i className="fa-solid fa-fire mr-2"></i>Trending
              </Link>
            </li>
            <Link to={"/results?q=Shopping"}><li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-cart-shopping"></i>Shopping
            </li></Link>
            <Link to={"/results?q=music"}> <li className="flex gap-2  items-center text-xs">
           <i className="fa-solid fa-circle-play items-center"></i>
              Music
            </li></Link>
            <Link to={"/results?q=Movies"}><li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-film"></i>Movies
            </li></Link>
            <Link to={"/results?q=music"}> <li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-video"></i>Live
            </li></Link>
            <Link to={"/results?q=Gaming"}> <li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-headset"></i>Gaming
            </li></Link>
            <Link to={"/results?q=News"}> <li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-newspaper"></i>News
            </li></Link>
            <Link to={"/results?q=Sports"}><li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-volleyball"></i>Sports
            </li></Link>
            <Link to={"/results?q=Fashion & Beauty"}><li className=" flex gap-2  items-center text-xs">
              <i className="  fa-solid fa-glasses"></i>Fashion & Beauty
            </li></Link>
            <Link to={"/results?q=Learning"}> <li className=" flex gap-2  items-center text-xs">
              <i className="fa-solid fa-graduation-cap"></i>Learning
            </li>
            </Link>
          </ul>
 
         </div>
         </div>
        )}
       
    </div>
  )
}

export default SideBar