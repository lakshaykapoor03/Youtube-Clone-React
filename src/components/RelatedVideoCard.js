import React from 'react'

const RelatedVideoCard = ({info}) => {
    const {snippet}= info;
    const {channelTitle, title, thumbnails }= snippet;

    
       
      return (
        <div className=" flex  items-center p-1 w-52 rounded-md shadow-lg cursor-pointer">
           <img className="w-48 rounded-xl" src={thumbnails.medium.url} alt="" />
       <div className="flex ">
           <span>
               <i className="fa-solid fa-circle-user mx-2 "></i>
              </span>
          <span className="text-xs font-medium overflow-hidden">{title}</span>
   <span className="text-xs text-gray-600 font-normal"> {channelTitle} </span>
   </div>

   </div>
      )
    
}

export default RelatedVideoCard