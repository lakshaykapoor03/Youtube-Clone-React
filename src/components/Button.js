import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_API } from "../utils/constants";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";
import { createContext } from "react";

const Button = ({showResults}) => {
  const arr = [
    "All",
    "Protein",
    "Movie",
    "Sports",
    "Gym",
    "Bodybuilding",
    "Workout",
    "Cricket",
    "Live",
    "Music",
    "Mixes",
    "Computer Programming",
    "Gaming",
    "Game Shows",
    "Motivation",
    "Study Skills"
  ];
  const [params] = useSearchParams();
  


  // const resultContext = createContext(result)
  // console.log(resultContext)

  return (
    <>
      {arr.map((name, idx) => {
        return (
          <Link key={idx} >
       
            <button onClick={()=> showResults(name)} key={idx} className="px-2 py-1 bg-gray-100 hover:bg-gray-300  rounded text-xs ">
            {name}
          </button>
      
          </Link>
        );
      })}
    </>
  );
};

export default Button;
