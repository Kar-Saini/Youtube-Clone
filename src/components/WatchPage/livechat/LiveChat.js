import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  addLiveChatMsg,
  deleteLiveChatMsg,
} from "../../../utils/slices/liveChatSlice";

export default function LiveChat() {
  const [chatMsg, setChatMsg] = useState("");
  const liveChatMsgs = useSelector((store) => store.liveChatMsgs.liveChatMsgs);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addLiveChatMsg({
          msg: Math.random(),
          name: Math.random(),
          id: Math.random(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
      dispatch(deleteLiveChatMsg());
    };
  }, []);

  if (!liveChatMsgs) {
    return;
  }
  return (
    <div className="w-full h-[460px] m-3 bg-slate-200 overflow-y-scroll ">
      <div className="flex flex-col-reverse h-5/6">
        {liveChatMsgs.map((ele) => (
          <LiveChatMessage name={ele.name} msg={ele.msg} key={ele.id} />
        ))}
      </div>
      <div className="bg-slate-500 rounded-xl h-1/6 py-1  ">
        <div className="m-1 flex">
          <input
            type="text"
            placeholder=" Enter your message"
            className="w-2/3 rounded-lg p-1"
            value={chatMsg}
            onChange={(event) => {
              setChatMsg(event.target.value);
            }}
          />
        </div>
        <div className="m-1">
          <button
            onClick={() => {
              dispatch(
                addLiveChatMsg({
                  name: "Kartik",
                  msg: chatMsg,
                  id: Math.random(),
                })
              );
              setChatMsg("");
            }}
            className="p-1 bg-slate-800 text-white rounded-md hover:bg-slate-700 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
