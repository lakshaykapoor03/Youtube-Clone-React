import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { API_KEY, SEARCH_API } from "../utils/constants";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";
import Header from "./Header";
import { useContext } from "react";
import Button from "./Button";
import VideoCardTwo from "./VideoCard2";
function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const videoCardData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=AIzaSyAWWnH9A63525B5szFKwle0bcyLAHZjmCU"
    );
    const json = await data.json();
    // setVideos((prev) => [...prev, ...json.items]);
    setVideos( json.items);
    console.log(json.items);
  };

  const showResults = async (btnName) => {
    const data = await fetch(SEARCH_API + btnName + "&key=" + API_KEY);
    const json = await data.json();
    console.log(json.items);
    setVideos(null);
    setResults(json.items);
  };
  

  // const handleInfiniteScroll = async () => {
  
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setPage((prev) => prev + 1);
  //     }
  //   } catch {}
  // };

  // console.log(results);

  useEffect(() => {
    videoCardData();
  }, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfiniteScroll);
  // }, []);


  return (
    <>
      <Header />
      <div className="flex mx-4 gap-10 mt-4">
        <SideBar />
        <div className="flex flex-col gap-28 md:gap-10">
          <div className="flex flex-wrap h-6 items-center gap-4 mt-20 ">
            <Button showResults={showResults} />
          </div>
          <div className="flex justify-center items-center flex-wrap gap-5 md:mt-2 mt-16">
            {/* {   videos[0] && <AdVideoCard info={videos[10]}/>} */}
            {
            videos
              ? videos.map((item, idx) => {
                  return (
                    <Link key={item.id} to={"/watch?v=" + item.id}>
                      <VideoCard info={item} />
                    </Link>
                  );
                })
              : 
              results.map((item, idx) => {
                  return (
                    <Link key={idx} to={"/watch?v=" + item.id.videoId}>
                      <VideoCardTwo info={item} />
                    </Link>
                  );
                })
                }
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoContainer;
