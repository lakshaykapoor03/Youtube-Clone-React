import SideBar from "./SideBar";
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY, COMMENTS_API } from "../utils/constants";
import VideoDetails from "./VideoDetails";
import Comments from "./CommentsContainer";
import Header from "./Header";
import LiveChat from "./LiveChat";
import RelatedVideoCard from "./RelatedVideoCard";
import { Link } from "react-router-dom";

const WatchPage = () => {
  const [videoData, setVideoData]= useState([])
  const [relatedVideoData, setRelatedVideoData]= useState([])
  const [commentList,setCommentList]= useState([])

  const [params] = useSearchParams();

  const getComments = async () => {
    const data = await fetch(
      COMMENTS_API + params.get("v") + "&key=" + API_KEY
    );
    const json = await data.json();
    setCommentList(json?.items);
  };


  useEffect(() => {
    getComments();
    
  }, []);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
 

  const getVideoDetails= async()=>{
    const data= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=`+ API_KEY)
    const json= await data.json();
    setVideoData(json.items)
    console.log(json.items)
  }
  const getRelatedVideoDetails= async()=>{
    const data= await fetch(` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&relatedToVideoId=${searchParams.get("v")}&type=video&key=`+ API_KEY )
    const json= await data.json();
    console.log(json.items)
    setRelatedVideoData(json.items)
  }
  

//   const getComments= async()=>{
//     const data= await fetch ("https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key="+API_KEY)
//     const json= await data.json()
//     console.log(json?.items)
//     setCommentlist(json.items)
// }

  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    getComments();
    getRelatedVideoDetails();

  }, []);

  return (
    <div>
      <Header/>
    <div className="flex w-full">
      <SideBar />
      <iframe
      className="px-5"
        width="1200"
        height="500"
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      
      ></iframe>
      <div className="hidden md:block">
        <LiveChat/>
      </div>
    </div>
    <div  className="flex md:flex-row flex-col">
    <div className=" md:w-2/3">
      {videoData.map((data)=><VideoDetails key={data.id} videoData= {data}/>)}
      
      {/* {commentList.map((comment)=><Comments comment={comment}/>)} */}

      <div >
        <h1 className="font-bold text-3xl m-2 p-2">Comments:</h1>
        {commentList.map((comment) => (
          <div key={comment.id} className="flex items-center m-2 p-2">
            <img
              className="w-7 rounded-full mx-2"
              src="https://yt3.ggpht.com/yti/AHXOFjXzYc-9Tkv7Sg-wO65yuoEhXM1J2pQxdL4jFI7zJHs=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
            />
            <h1 className="text-md" >
              {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            </h1>
          </div>
        ))}
      </div>
     </div>
      <div>

        {relatedVideoData.map((data)=> <Link  key={data.id.videoId} to={"/watch?v="+data.id.videoId}><RelatedVideoCard info={data}/>
              </Link> )}
      </div>
     
      </div>
    
    </div>
  );
};

export default WatchPage;
