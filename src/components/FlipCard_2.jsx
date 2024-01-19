import React from "react";
import bulb from "../images/bulb.svg";
import speaker from "../images/speaker.svg";

const FlipCard_2 = () => {
  return (
    <div className=" flex-col flex-1 h-[393.19px] w-[712px] gap-32px items-center justify-center rounded-23xl-5 [background:linear-gradient(222.94deg,_#071844,_#071844_3.95%,_#2d87b6_82.51%,_#2d87b6)]  box-border">
      {/* Bulb in the top-left corner */}
      <div className=" flex justify-between p-10">
        <img
          className="w-[34.01px] h-[34.01px]  top-[2.83px] left-0[7.08px] transform rotate-[-180]"
          alt=""
          src={bulb}
        />
        {/* Speaker in the top-right corner */}
        <img
          className="w-[34.01px] h-[34.01px]  top-[4.58px] left-[4.25px] transform rotate-[-180]"
          alt=""
          src={speaker}
        />
      </div>

      {/* Text in the center */}
      <div className="flex items-center justify-center  mt-10 pb-10">
        <h1 className="text-background: #FFFFFF  text-white font-lato text-[38.26px] self-stretch text-center font-bold">5x +  12</h1>
      </div>
    </div>
  );
};

export default FlipCard_2;
