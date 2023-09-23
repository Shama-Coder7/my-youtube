import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="youtube-logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          />
        </a>
      </div>
      <div className="p-1 m-1 col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full  bg-gray-100"
          type="text"
        />
        <button className="border bg-gray-200 border-gray-400 p-2 rounded-r-full px-4">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Head;
