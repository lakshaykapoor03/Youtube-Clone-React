import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import ButtonList from "./ButtonList";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";
import Header from "./Header";

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
<>
<Header/>
      <div className="flex mx-4 gap-10 mt-4">
        <SideBar />
        <div className="flex flex-col gap-28 md:gap-10">
          <div>
            <ButtonList />
          </div>
          <div className="flex flex-wrap gap-5 ">
        {   videos[0] && <AdVideoCard info={videos[10]}/>}
            {videos.map((item, idx) => {
              return <Link  key={item.id} to={"/watch?v="+item.id}><VideoCard info={item} />
              </Link>

            })}
          </div>
        </div>
      </div>
      </>
    
  );
}

export default VideoContainer;
