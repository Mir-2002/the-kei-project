import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineTimer } from "react-icons/md";
import Kei from "./Kei";

function MessageButton() {
  return (
    <Link
      to="/message"
      className="bg-pink-500 text-white font-main p-3 rounded-lg text-lg shadow-md max-w-64 text-center active:bg-pink-600 "
    >
      Leave A Message for Kei!
    </Link>
  );
}

const Countdown = ({ onTargetDateReached }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 11, 19);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        onTargetDateReached(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, [onTargetDateReached]);

  return (
    <div className="flex flex-row w-auto h-auto items-center gap-x-3">
      <MdOutlineTimer className="w-5 h-5" />
      <p className="text-base text-pink-500 font-bold font-mono">
        {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m{" "}
        {timeRemaining.seconds}s
      </p>
    </div>
  );
};

const HomePage = () => {
  const [isTargetDateReached, setIsTargetDateReached] = useState(false);

  const handleTargetDateReached = (status) => {
    setIsTargetDateReached(status);
  };
  return (
    <>
      {!isTargetDateReached ? (
        <div className="flex flex-col justify-center items-center w-full h-full gap-y-10">
          <p className="text-xl font-message text-center">
            Its Kei's Birthday on December 19th!
          </p>
          <MessageButton />
          <Countdown onTargetDateReached={handleTargetDateReached} />
        </div>
      ) : (
        <Kei />
      )}
    </>
  );
};

export default HomePage;
