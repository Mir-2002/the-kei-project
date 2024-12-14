import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useMessages from "./config/useFirebase";

const Message = () => {
  const { id } = useParams();
  const { getMessageById } = useMessages();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  console.log(id);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const fetchedMessage = await getMessageById(id);
        setMessage(fetchedMessage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

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

  if (!message) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <p className="text-xl font-mono font-medium">No message found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-auto w-full p-10 font-message gap-y-10 overflow-y-scroll">
      <div className="flex flex-col justify-center items-center text-slate-800 gap-y-5">
        <p className="text-2xl text-center text-wrap leading-10">
          {message.message}
        </p>
        <p className="text-2xl ml-auto">- {message.sender}</p>
      </div>

      <Link
        to="/messages"
        className="text-xl text-white font-medium p-2 bg-pink-500 rounded-lg font-main"
      >
        Back
      </Link>
    </div>
  );
};

export default Message;
