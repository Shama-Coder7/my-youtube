import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateName, makeRandomMessage } from '../utils/helper';
import { VscSend } from 'react-icons/vsc';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log('Api Poll');

      dispatch(
        addMessage({
          name: generateName(),
          message: makeRandomMessage(25) + '🥇',
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[410px] ml-2 p-2 border border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-b-lg bg-slate-200"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Shama',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          className="w-[28rem] bg-slate-50"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" p-1 bg-green-500 mx-4 w-10 px-3 border rounded-lg">
          <VscSend />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
