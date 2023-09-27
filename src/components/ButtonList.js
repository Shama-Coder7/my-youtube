import React from 'react';
import Button from './Button';
// import { BsChevronRight } from 'react-icons/bs';

const ButtonList = () => {

  return (
    <div className="flex">
      {/* <BsChevronRight className="m-4 mt-4" /> */}
      <Button name="All" />
      <Button name="Computer Programming" />
      <Button name="Namaste JavaScript" />
      <Button name="Animated films" />
      <Button name="Stocks" />
      <Button name="News" />
      <Button name="Sales" />
      <Button name="Film criticisms" />
      <Button name="Motivation" />
      <Button name="Lectures" />
    </div>
  );
};

export default ButtonList;
