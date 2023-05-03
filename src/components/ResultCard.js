import React from "react";

const ResultCard = ({result}) => {

    const {channelTitle, title, description, thumbnails
    }= result.snippet;
  return (
    <div className=" flex justify-center p-2 m-4 shadow-sm rounded-md">
      <div className="mx-4">
        {" "}
        <img
          src={thumbnails.medium.url}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2>{title}</h2>
        <div className="flex">
          <span className=" mx-2">2.8M Views</span>
          <span>Years</span>
        </div>

        <div>
        <span>
          <i className="fa-solid fa-circle-user mx-2 "></i>
        </span>
        <span className="text-xs font-medium overflow-hidden">{channelTitle}</span>
        </div>
        <div>
     <h2>{description}</h2>
     </div>
      </div>
     
    </div>
  );
};

export default ResultCard;