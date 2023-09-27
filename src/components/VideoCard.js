import React from 'react';

const VideoCard = ({ info }) => {
  // console.log('info', info);

  const { snippet, statistics } = info;
    // const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-3 m-3 w-96 shadow">
      <img
        className="w-96 rounded-lg"
        src={snippet.thumbnails.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
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
