import React from "react";
import LiveCommentsList from "./LiveCommentsList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { getRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveChatMessage, setLiveChatMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: makeid(20),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="border border-black px-2   h-[400px] w-80 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, idx) => (
          <LiveCommentsList key={idx} comment={c.message} userName={c.name} />
        ))}
      </div>
      <form
        className="w-80 border border-black px-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Lakshay Kapoor",
            message:liveChatMessage,
          }))
          setLiveChatMessage("")
        }}
      
      >
        <input
          type="text"
          className="w-52 h-5 text-sm"
          name=""
          id=""
          value={liveChatMessage}
          onChange={(e)=>{
            setLiveChatMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100 rounded text-xs  items-center">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
