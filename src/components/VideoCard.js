import React from 'react';

const VideoCard = ({ info }) => {
  // console.log('info', info);

  const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  return (
		<div className=" flex flex-col w-[312px] ">
      <img
        className="w-96 rounded-lg"
        src={snippet.thumbnails.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
        {/* <li>{snippet?.publishedAt} time</li> */}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
