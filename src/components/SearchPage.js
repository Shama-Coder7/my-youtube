import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { addDetails } from '../utils/searchVideoSlice';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [videos, setVideos] = useState([]);

  const { text } = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSearch();
  }, [text]);

  const fetchSearch = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API + text);
    const response = await data.json();
        console.log('getVideos', response.items);

    setVideos(response?.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center ">
      {videos?.map((video) => (
        <Link
          to={'/watch?v=' + video.id}
          onClick={() => dispatch(addDetails(video.id))}
          key={video.id}
          value={video.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default SearchPage;
