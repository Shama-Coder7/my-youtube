import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    // console.log('getVideos', response.items);
    setVideos(response.items);
  };
  return (
    <div className=" flex flex-wrap justify-evenly h-full overflow-y-auto gap-y-2 md:gap-x-2">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos?.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
