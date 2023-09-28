import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { searchText } from '../utils/searchVideoSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // api call

    // make an api call after every key press
    // but if the difference between 2 api calls is <200ms decline the api calls

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    //

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-1 shadow-lg">
      <div className="flex col-span-1 py-3 px-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-5 mx-2 my-1"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 mx-6">
        <div className="text-center">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full bg-gray-100"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {/* <Link href="/search"> */}
          {/* <a href={'/search?search_query=' + searchQuery}> */}
          <button
            className=" border bg-gray-200 border-gray-400 rounded-r-full px-3 py-2 py-3 -py-1 "
            onClick={() =>
              dispatch(searchText(searchQuery), setShowSuggestions(false))
            }
          >
            <AiOutlineSearch />
          </button>
          {/* </Link> */}
          {/* </a> */}
        </div>
        {showSuggestions && (
          <div className="z-100 absolute items-center bg-white w-[500px] py-1 px-3 shadow-lg rounded-lg dark:shadow-slate-400">
            <ul>
              {/* <Link href="/search"> */}
              {/* <a href={'/search?search_query=' + searchQuery}> */}
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex py-2 px-3 shadow-sm hover:bg-gray-100 cursor-progress"
                >
                  <AiOutlineSearch className="m-1" />
                  {s}
                </li>
              ))}
              {/* </Link> */}
              {/* </a> */}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 justify-evenly">
        {/* <FaRegBell className="h-8 my-3" />
        <BiSolidUserCircle className="h-8 my-3" /> */}

        <img
          className="h-6 my-3"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149845.png"
        />

        <img
          className="h-6 my-3"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Head;
