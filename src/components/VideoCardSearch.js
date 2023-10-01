import React from 'react';

const VideoCardSearch = ({ info }) => {
  // console.log('info', info);

  const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-1 mx-1 my-2 shadow-sm w-[580px] dark:shadow-slate-700 dark:rounded-b-lg h-auto">
    <div className='flex'>

      <img
        className="w-[400px] rounded-lg"
        src={snippet.thumbnails.medium?.url}
        alt="thumbnail"
      />
      <ul className='px-4'>
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
        {/* <li>{snippet?.publishedAt} time</li> */}
      </ul>
      </div>
    </div>
  );
};

export default VideoCardSearch;
