import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-7">
      <h1 className="text-4xl text-green-400 font-mono font-bold">
        Message Posted!
      </h1>
      <p className="font-mono text-lg text-slate-700 text-center w-3/4">
        All messages are hidden and compiled until her birthday,{" "}
        <span className="inline-block font-bold text-pink-500">
          December 19th 12:00 AM ^_^
        </span>
      </p>
      <p className="font-mono text-lg text-slate-700 text-center">
        Redirecting in{" "}
        <span className="font-bold text-pink-500">{countdown}</span> seconds...
      </p>
    </div>
  );
};

export default Thanks;
