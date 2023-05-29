import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SUGGESTIONS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  console.log(searchQuery);

  const getSuggestions = async () => {
    const data = await fetch(SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="w-full flex justify-between mt-0 mx-5 items-center fixed bg-white">
        <div className="flex items-center w-56">
          <span className="cursor-pointer" onClick={() => toggleMenuHandler()}>
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
        <div className="flex flex-col">
          <div className=" flex items-center">
            <input
              placeholder="Search"
              className=" rounded-l-full w-[15rem] md:w-[25rem] p-2 border outline-none "
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              
            />

            <span>
              <i className="fa-solid fa-search border text-base   rounded-r-full p-2 px-5"></i>
            </span>
            <span>
              <i className="fa-solid fa-microphone ml-4"></i>
            </span>
          </div>
          {showSuggestions && (
            <ul className="w-[14.5rem] shadow-lg rounded ml-2  mt-11 py-2 p-1 z-50 bg-white absolute">
              {suggestions.map((suggestion,idx) => {
                return (
                 <Link key={idx} to={"/results?q="+ suggestion}><li className="text-xs p-1  rounded shadow-sm" >
                      {suggestion}
                    </li>
                    </Link>
                   
                
                )
                
                ;
              })}
            </ul>
          )}
        </div>
        <div className="flex mx-2">
          <span>
            <i className="fa-solid fa-video mx-2"></i>
          </span>
          <span>
            <i className="fa-regular fa-bell mx-2"></i>
          </span>
          <img
            className="w-7 rounded-full mx-2"
            src="https://yt3.ggpht.com/yti/AHXOFjXzYc-9Tkv7Sg-wO65yuoEhXM1J2pQxdL4jFI7zJHs=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
