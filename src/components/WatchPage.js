import SideBar from "./SideBar";
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import VideoDetails from "./VideoDetails";
import Comments from "./CommentsContainer";
import Header from "./Header";
import LiveChat from "./LiveChat";

const WatchPage = () => {



  const [videoData, setVideoData]= useState([])
 const [commentList,setCommentlist]= useState([])

  const getVideoDetails= async()=>{
    const data= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=`+ API_KEY)
    const json= await data.json();
    setVideoData(json.items)
    console.log(json.items)
  }

  const getComments= async()=>{
    const data= await fetch ("https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key="+API_KEY)
    const json= await data.json()
    console.log(json?.items)
    setCommentlist(json.items)
}

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    getComments();
  }, []);

  return (
    <div>
      <Header/>
    <div className="flex w-full">
      <SideBar />
      <iframe
      className="px-5"
        width="900"
        height="400"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      
      ></iframe>
      <div className="">
        <LiveChat/>
      </div>
    </div>
    <div>
      {videoData.map((data)=><VideoDetails key={data.id} videoData= {data}/>)}</div>
      {/* {commentList.map((comment)=><Comments comment={comment}/>)} */}
    </div>
  );
};

export default WatchPage;
