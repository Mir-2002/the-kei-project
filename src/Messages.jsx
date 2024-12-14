import React from "react";
import useMessages from "./config/useFirebase";
import { useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const Messages = () => {
  const navigate = useNavigate();
  const { messages, loading, error } = useMessages();

  if (loading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <p className="text-xl font-mono font-medium">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <p className="text-lg font-mono font-medium text-red-500">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center w-full h-full p-10 gap-y-3">
        {" "}
        {messages.length > 0 &&
          messages.map((message, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-full h-auto active:animate-jump-out"
              onClick={() => navigate(`/messages/${message.id}`)}
            >
              {" "}
              <IoIosMail className="text-[#D7D3BF] w-56 h-56 active:text-[#bbb28a]" />
              <p className="absolute top-16 text-base font-message">
                from {message.sender}
              </p>
            </div>
          ))}{" "}
      </div>
    </>
  );
};

export default Messages;
