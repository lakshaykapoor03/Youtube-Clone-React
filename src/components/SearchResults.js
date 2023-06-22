import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_API } from "../utils/constants";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";
import Header from "./Header";

function SearchResults() {
  const [params] = useSearchParams();
  const [result, setResult] = useState([]);

  const showResults = async () => {
    const data = await fetch(SEARCH_API + params.get("q") + "&key=" + API_KEY);
    const json = await data.json();
    console.log(json.items);
    setResult(json.items)
  };

  useEffect(()=>{
    showResults()
  }, [])

  console.log(params.get("q"));
  return (
  <div>
    <Header/>
    <div className="flex flex-col pt-24 justify-center items-center">
      {
        result.map((result)=><Link to={"/watch?v="+ result.id.videoId}> <ResultCard key={result.id.videoId} result={result}/></Link>


        )
      }
  </div>
  </div>
  )
}

export default SearchResults