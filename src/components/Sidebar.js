import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillHome } from 'react-icons/ai';
import { BsFire, BsMusicNote, BsFillLightbulbFill } from 'react-icons/bs';
import { HiShoppingBag, HiMiniTrophy } from 'react-icons/hi2';
import { PiFilmSlateDuotone } from 'react-icons/pi';
import { SiYoutubegaming } from 'react-icons/si';
import { IoNewspaperOutline } from 'react-icons/io5';
import { GiHanger } from 'react-icons/gi';
import { CiStreamOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="sticky overflow-y-scroll bg-white p-4 px-6 shadow-lg w-56 h-[41rem]">
      <ul>
        <Link to="/">
          <li className="flex h-10 ">
            <AiFillHome className="text-xl mr-4" />
            Home
          </li>
        </Link>
        <li className="flex h-10 ">
          <img
            alt="youtube-shorts"
            className="h-6 mr-4"
            src="data:image/png;base64,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"
          />
          Shorts
        </li>
        <li className="flex h-10 ">
          {/* <MdSubscriptions className="text-xl mr-6 bg-red-200" /> */}
          <img
            alt="subscription"
            className="h-6 mr-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3ZEQqdmNDvj2TOq8u8qkU-U2oOqfJbZRag&usqp=CAU"
          />
          Subscription
        </li>
      </ul>

      <hr />
      <h1 className="font-bold  mb-3">Explore</h1>

      <ul>
        <li className="flex h-10 ">
          <BsFire className="text-xl mr-4" />
          Trending
        </li>
        <li className="flex h-10 ">
          <HiShoppingBag className="text-xl mr-4" />
          Shopping
        </li>
        <li className="flex h-10 ">
          <BsMusicNote className="text-xl mr-4" />
          Music
        </li>
        <li className="flex h-10 ">
          <PiFilmSlateDuotone className="text-xl mr-4" />
          Films
        </li>
        <li className="flex h-10 ">
          <CiStreamOn className="text-xl mr-4" />
          Live
        </li>
        <li className="flex h-10 ">
          <SiYoutubegaming className="text-xl mr-4" />
          Gaming
        </li>
        <li className="flex h-10 ">
          <IoNewspaperOutline className="text-xl mr-4" />
          News
        </li>
        <li className="flex h-10 ">
          <HiMiniTrophy className="text-xl mr-4" />
          Sport
        </li>
        <li className="flex h-10 ">
          <BsFillLightbulbFill className="text-xl mr-4" />
          Learning
        </li>
        <li className="flex h-10 ">
          <GiHanger className="text-xl mr-4" />
          Fashion
        </li>
      </ul>
      <hr />
      <h1 className="font-bold">More from Youtube</h1>
      <ul>
        <li className="flex h-10 text-sm ">
          <img
            alt="premium"
            className="h-6 mr-4"
            src="https://styles.redditmedia.com/t5_2qh44/styles/communityIcon_1vctc2ym3zt51.png"
          />
          Youtube Premium
        </li>
        <li className="flex h-10 text-sm ">
          <img
            alt="music"
            className="h-5 mr-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/240px-Youtube_Music_icon.svg.png"
          />
          Youtube Music
        </li>
        <li className="flex h-10 text-sm">
          <img
            alt="kids"
            className="h-6 mr-4"
            src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc=w240-h480-rw"
          />
          Youtube Kids
        </li>
      </ul>
      <hr />
      <ul>
        <li>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>

      {/* <p>
        AboutPressCopyrightContact usCreatorAdvertiseDevelopers
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features © 2023
        Google LLC
      </p> */}
    </div>
  );
};

export default Sidebar;
