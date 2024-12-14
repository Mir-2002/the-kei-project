import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCake } from "react-icons/bs";
import ConfettiExplosion from "react-confetti-explosion";

const Kei = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.toLowerCase() === "margaret") {
      navigate("/messages");
    } else {
      alert("Incorrect keyword!");
      setKeyword("");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center font-main text-slate-600 gap-y-20 p-10">
        <div className="flex flex-col items-center gap-y-2">
          <BsCake className="w-20 h-20 text-pink-500 mb-7 animate-bounce animate-infinite animate-duration-[1700ms]" />
          <h1 className="text-3xl font-main text-pink-500">
            Happy Birthday Kei!
          </h1>
          <h2 className="text-lg">I made a little something for you.</h2>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-xl">Enter the keyword</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-2 items-center"
          >
            <input
              type="password"
              name="keyword"
              id="keyword"
              className="border-2 border-pink-300 rounded-md outline-1 outline-pink-600 p-1 text-base"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-pink-500 p-2 w-3/4 text-white rounded-md active:bg-pink-600"
            >
              Open My Gift!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kei;
