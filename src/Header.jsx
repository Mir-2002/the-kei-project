import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative flex justify-start items-center w-full h-[10vh] px-5 shadow-lg">
      <Link to="/" className="text-3xl font-main text-pink-500 font-semibold">
        The Kei Project
      </Link>
    </header>
  );
};

export default Header;
