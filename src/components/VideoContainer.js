import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import ButtonList from "./ButtonList";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  const videoCardData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  useEffect(() => {
    videoCardData();
  }, []);

  // if (!isMenuOpen) return null;
  return (

      <div className="flex mx-4 gap-10 mt-4">
        <SideBar />
        <div className="flex flex-col gap-28 md:gap-10">
          <div>
            <ButtonList />
          </div>
          <div className="flex flex-wrap gap-5 ">
            {videos.map((item, idx) => {
              return <Link to={"/watch?v="+item.id}><VideoCard key={item.id} info={item} />
              </Link>

            })}
          </div>
        </div>
      </div>
    
  );
}

export default VideoContainer;
