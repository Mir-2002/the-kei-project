import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessages from "./config/useFirebase";
import { FaPaperPlane } from "react-icons/fa";

const WriteMessage = () => {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const { addMessage, loading, error } = useMessages();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMessage(sender, message);
    setSender("");
    setMessage("");
    navigate("/thanks");
  };

  const handleBack = (e) => {
    e.preventDefault();
    setSender("");
    setMessage("");
    navigate("/");
  };

  return (
    <div className="w-full h-full p-10">
      <form
        action=""
        className="flex flex-col gap-y-10 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-2 items-start">
          <label htmlFor="sender" className="text-lg font-serif">
            Your Name
          </label>
          <input
            type="text"
            name="sender"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="border-2 border-gray-400 rounded-md text-base p-2 w-full outline-gray-600 font-serif"
            placeholder="This will appear in the message"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 items-start">
          <label htmlFor="message" className="text-lg font-serif">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-gray-400 rounded-md text-base p-2 w-full outline-gray-600 font-serif"
            placeholder="Type the message here"
            required
          ></textarea>
        </div>
        <div className="flex flex-row justify-between items-center">
          <button
            type="submit"
            className="flex items-center justify-center font-serif text-lg bg-pink-500 rounded-full w-20 h-20 text-white active:bg-pink-600"
          >
            <FaPaperPlane />
          </button>
          <button
            className="text-lg font-serif bg-pink-500 rounded-lg py-2 px-5 text-white active:bg-pink-600"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteMessage;
