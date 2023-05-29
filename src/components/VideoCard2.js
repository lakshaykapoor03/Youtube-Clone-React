import React from 'react'


const VideoCardTwo=({info})=> {
  // console.log(info)
    const {snippet}= info;
const {channelTitle, title, thumbnails }= snippet;

   
  return (
    <div className=" flex flex-col  items-center p-1 w-52 rounded-md shadow-lg cursor-pointer">
        <img className="w-48 rounded-xl" src={thumbnails.medium.url} alt="" />
        <div className="flex">
        <span>
            <i className="fa-solid fa-circle-user mx-2 "></i>
          </span>
          <span className="text-xs font-medium overflow-hidden">{title}</span>
        </div>
        <span className="text-xs text-gray-600 font-normal"> {channelTitle} </span>
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

export default VideoCardTwo;