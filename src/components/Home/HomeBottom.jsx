import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="font-[font-2] flex items-center justify-center gap-5 hover:border-[#D3FD50] hover:text-[#D3FD50]">
      <Link to="/project" className="border-2 rounded-full text-[6.5vw] px-14 py-5">
        WORK
      </Link>
      <Link to="/agence " className="border-2 rounded-full text-[6.5vw] px-14 py-5">
        AGENCY
      </Link>
    </div>
  );
};

export default HomeBottom;
