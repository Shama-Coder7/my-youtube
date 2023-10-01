import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { SEARCH_BY_ID } from '../utils/constants';
import { addDetails } from '../utils/searchVideoSlice';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [movieId, setMovieId] = useState(searchParams.get('v'));
  const [videoInfo, setVideoInfo] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  console.log(searchParams.get('v'));
  const dispatch = useDispatch();
  useEffect(() => {
    setMovieId(searchParams.get('v'));
    dispatch(closeMenu());
    dispatch(addDetails(movieId));
    movieDetailsById();
  }, [movieId]);

  const movieDetailsById = async () => {
    const data = await fetch(SEARCH_BY_ID + movieId);
    const json = await data.json();
    console.log('movieid', json);
    setVideoInfo(json?.items[0]?.snippet);
  };
  return (
    <div className="flex flex-col">
      <div className="p-10 pb-4 flex w-full">
        <div className="rounded-b">
          <iframe
            width="900"
            height="450"
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div className="px-10 pb-2">
        <h2 className="pb-5 font-bold text-lg">{videoInfo?.title}</h2>
        {/* <div className="flex">
          <div className="flex">
            <img src="" alt="user-icon" />
            <button>Subscribe</button>
          </div>

          <div className="flex">
            <button>{videoInfo?.likeCount}Like</button>
            <button>Share</button>
            <button>Download</button>
            <button>...</button>
          </div>
        </div> */}
      </div>
      <div
        className={
          ' bg-gray-200 shadow-lg mx-10 mb-5' +
          (showDescription ? ' h-auto' : ' h-28 overflow-hidden ')
        }
      >
        {/* <div className="flex font-bold p-1 px-2">
          <p>views</p>
          <p>time</p>
        </div>
        <p className="px-2"> about</p> */}

        <h1 className="font-bold px-2">Description : </h1>
        <div className="border border-gray-400 "></div>
        <h3
          className="font-semibold px-2"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? 'Show less 🔼' : '   ... more 🔽'}
        </h3>
        <p className="p-2 ">{videoInfo?.description}</p>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
