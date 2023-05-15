import React from 'react'
import CommentsContainer from './CommentsContainer';
// import { useSearchParams } from "react-router-dom";
// import { API_KEY } from "../utils/constants";
// import { useState, useEffect } from 'react';


const VideoDetails=({videoData})=> {
 
const {snippet, statistics}= videoData;
// console.log(snippet, statistics);

  return (
    <div >
      <h1 className="text-xl font-semibold p-2 m-2">{snippet.title}</h1>
      <div className="flex justify-between mx-5">
      <div className="flex items-center gap-3 ">
      <div >
            <i className="fa-solid fa-circle-user mx-2 text-3xl"></i>
          </div>
          <div className="text-lg font-semibold">{snippet.channelTitle}
          <br /></div>
          <div>
            <button className="w-18 p-2 bg-black text-white text-md rounded-full font-medium" >Subscribe</button>
          </div>
      </div>
    
    <div className="flex justify-around w-96">
   <div> <button className="bg-gray-200 rounded-l-full p-2 mx-1"><i className="fa-regular fa-thumbs-up text-2xl"></i>{Math.floor(statistics.likeCount/1000)}K</button>
        <button className="bg-gray-200 rounded-r-full p-2"><i className="fa-regular fa-thumbs-down text-2xl"></i></button></div>
      <button className="bg-gray-200 rounded-full p-2 text-lg px-2"><i class="fa-solid fa-share text-2xl px-2"/>Share</button>
      <button className="bg-gray-200 rounded-full p-2 text-lg px-2"><i class="fa-solid fa-scissors"></i>Clip</button>
    </div>
      </div>
      <div className="text-xs mx-4 bg-gray-100 rounded-xl p-2 mt-4">
        <h2>{Math.floor(statistics.viewCount/1000)}K Views</h2>
        <p className="text-sm ">{snippet.description}</p>
      </div>
      <div className="text-base mx-4 my-4">
      {statistics.commentCount} Comments 
      <CommentsContainer/>
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