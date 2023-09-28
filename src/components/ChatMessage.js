import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        className="h-6"
        alt="user-icon"
        src="https://static.thenounproject.com/png/1743561-200.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
