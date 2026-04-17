import React from "react";
import Video from "./Video";

const HomeTop = () => {
  return (
    <div className="font-[font2] pt-5 text-center">
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center">
        The spark for{" "}
      </div>
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-start">
        all
        <div className="h-[8vw] w-[16vw] rounded-full  overflow-hidden ">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center">
        creative
      </div>
    </div>
  );
};

export default HomeTop;
