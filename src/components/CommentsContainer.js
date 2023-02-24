import React from "react";
import { useEffect } from "react";
import { API_KEY } from "../utils/constants";

const commentsData = [
  {
    name: "Lakshay Kapoor",
    comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
    replies: [
      {
        name: "Lakshay Kapoor",
        comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
      },
      {
        name: "Lakshay Kapoor",
        comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
      }
    ],
  },
  {
    name: "Lakshay Kapoor",
    comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
    replies: [
      {
        name: "Lakshay Kapoor",
        comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
      }
    ],
  },
  {
    name: "Lakshay Kapoor",
    comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
    replies: [
      {
        name: "Lakshay Kapoor",
        comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
      },
      {
        name: "Lakshay Kapoor",
        comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
      },
    ],
  },
  {
    name: "Lakshay Kapoor",
    comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
    replies: [
      {
        name: "Lakshay Kapoor",
        comment: "lorem ipsum dolor sit unet hey there my name is Lakshay",
      },
    ],
  },
];


const Comment = ({ data }) => {
  const { name, comment } = data;
  console.log(data.replies)
  return (
    <div className="flex bg-gray-100 rounded-lg my-2">
      <div className="mx-1">
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <div className="flex flex-col mx-2">
        <span className="text-sm">{name}</span>
        <span className="text-xs">{comment}</span>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    comments.map((comment, idx) => ( 
      <div key={idx}>
   <Comment  data={comment} />
      <div className="ml-2 p-2 border border-l-black">
      {/* <CommentsList comments={commentsData.replies}/> */}
       
      </div>
      </div>)
    )
      
  
 
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <h1>Comments</h1>
      <CommentsList comments={commentsData} />
 
    </div>
  );
};

export default CommentsContainer;
