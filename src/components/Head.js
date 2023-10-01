import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { searchText } from '../utils/searchVideoSlice';
import { MdKeyboardVoice, MdOutlineVideoCall } from 'react-icons/md';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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

  // console.log('SearchQuery: ', searchQuery);
  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
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

  // const searchQueryHandler = () => {
  //   navigate('/search?q=' + searchQuery);
  //   console.log('searchQuery-', searchQuery);
  // };

  return (
    <div className="sticky top-0 z-10 flex flex-row bg-white justify-between h-14 p-2 px-4 items-center shadow-xl ">
      <div className=" flex h-5 items-center ">
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
      <div className=" relative flex flex-col justify-center ">
        <div className="group flex items-center">
          <div className=" flex h-8 md:h-9 group-focus-within:border-gray-500 md:group-focus-within:pl-0 ">
            <input
              className=" bg-transparent py-1 px-5 w-44 md:group-focus-within:pl-2 md:w-64 lg:w-[500px] border rounded-l-full "
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {/* {searchQuery !== "" && (
            <span
              className="material-symbols-outlined cursor-pointer hover:bg-gray-200 rounded-full  dark:hover:bg-gray-700"
              onClick={() => setSearchQuery("")}
            >
              close
            </span>
          )} */}

            {/* <Link href="/search"> */}
            <a href={'/search?search_query=' + searchQuery}>
              <button
                className="w-[40px] md:w-[60px] h-8 md:h-9 flex items-center justify-center border border-l-0 rounded-r-2xl  bg-gray-100"
                onClick={() =>
                  dispatch(searchText(searchQuery), setShowSuggestions(false))
                }
              >
                <AiOutlineSearch />
              </button>
              {/* </Link> */}
            </a>
          </div>
          <div className="mx-3 h-4 w-4 my-3">
            <MdKeyboardVoice />
          </div>
        </div>
        {showSuggestions && (
          <div className="group-focus-within:block absolute top-10 left-1/2 -translate-x-80 z-50 bg-white border rounded-full mx-5">
            <ul>
              <a href={'/search?search_query=' + searchQuery}>
                {/* <Link href="/search"> */}
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex py-2 px-3 bg-white w-[500px] border border-gray-300 shadow-xl"
                    onClick={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                      dispatch(searchText(searchQuery));
                    }}
                  >
                    <AiOutlineSearch className="m-1" />
                    {s}
                  </li>
                ))}
              </a>
              {/* </Link> */}
            </ul>
          </div>
        )}
      </div>
      <div className="flex">
        {/* <FaRegBell className="h-8 my-3" />
        <BiSolidUserCircle className="h-8 my-3" /> */}
<MdOutlineVideoCall className='h-6 w-6 my-3 '/>
        <img
          className="h-6 my-3 px-10"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149845.png"
        />

        <img
          className="h-6 my-3 pr-4"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Head;
