import React from 'react'
import Comments from './Comments';
// import { useSearchParams } from "react-router-dom";
// import { API_KEY } from "../utils/constants";
// import { useState, useEffect } from 'react';


const VideoDetails=({videoData})=> {
 
const {snippet, statistics}= videoData;
console.log(snippet, statistics);

  return (
    <div>
      <h1>{snippet.title}</h1>
      <div className="flex justify-between mx-5">
      <div className="flex gap-3">
      <div>
            <i className="fa-solid fa-circle-user mx-2"></i>
          </div>
          <div>{snippet.channelTitle}
          <br /></div>
          <div>
            <button className="w-18 p-2 bg-black text-white text-xs rounded-full font-medium" >Subscribe</button>
          </div>
      </div>
    
    <div>
        <button className="bg-gray-200 rounded-l-full">{statistics.likeCount}</button>
        <button></button>
    </div>
      </div>
      <div className="text-xs mx-4 bg-gray-100 rounded-xl p-2">
        {snippet.description}
      </div>
      <div className="text-base mx-4 my-4">
      {statistics.commentCount} Comments 
    {/* <Comments/> */}
        
      </div>

    </div>
  )
}

export default VideoDetails;









// const [videoData, setVideoData]= useState([])
// const getVideoDetails= async()=>{
//   const data= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=`+ API_KEY)
//   const json= await data.json();
//   setVideoData(json.items)
//   console.log(json.items)
// }
// const [searchParams] = useSearchParams();
// console.log(searchParams.get("v"));

// useEffect(() => {
//   getVideoDetails();
// }, []);