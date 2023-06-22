import React from 'react'


const VideoCard=({info})=> {
  // console.log(info)
    const {snippet, statistics}= info;
const {channelTitle, title, thumbnails }= snippet;
const {viewCount}= statistics

   
  return (
    <div className=" flex flex-col  items-center p-1 w-60 rounded-md shadow-lg cursor-pointer">
        <img className="w-52 rounded-xl" src={thumbnails.medium.url} alt="" />
        <div className="flex mt-2">
        <span>
            <i className="fa-solid fa-circle-user mx-2 "></i>
          </span>
          <span className="text-xs font-medium overflow-hidden">{title}</span>
        </div>
        <span className="text-xs  mt-2 text-gray-600 font-normal"> {channelTitle} </span>
        <div className="text-xs   text-gray-600 font-normal"><span>{viewCount/1000}.Views</span> . <span>minutes</span></div>
    </div>
  )
}

// export const AdVideoCard=({info})=>{
// return(
// <div className="border border-red-900 p-2 outline-dashed">
//   <VideoCard info={info}/>
//   </div>
// )
// }

export default VideoCard