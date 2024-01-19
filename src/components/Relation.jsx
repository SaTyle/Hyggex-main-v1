import React from "react";
import vector from "../images/vector.svg";
import vector_1 from "../images/vector-1.svg";
import vector_2 from "../images/vector-2.svg";
import vector_3 from "../images/vector-3.svg";
import { useState } from "react";
import FlipCard_2 from "./FlipCard_2";
import FlipCard_1 from "./FlipCard_1";

const Relation = () => {
  const [flipped, setFlipped] = useState(true);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <section className=" w-[971px] flex flex-col items-start justify-start gap-[56px] max-w-full text-center text-13xl text-dimgray font-montserrat mq675:gap-[28px]">
      <h2 className="m-0  text-inherit font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-lgi mq750:text-7xl">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="  self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl font-med">
        <div className= "  w-[712px] flex flex-col items-center justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="w-[554px] flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq675:flex-wrap">
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px] text-darkslateblue">
                <b className="relative mq450:text-base">Study</b>
                <div className="relative box-border w-[84px] h-0.5 border-t-[2px] border-solid border-darkslateblue" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <div className="relative font-medium mq450:text-base">Quiz</div>
                <div className="relative box-border w-[70px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <div className="relative font-medium mq450:text-base">Test</div>
                <div className="relative box-border w-[68px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <div className="relative font-medium mq450:text-base">Game</div>
                <div className="relative box-border w-[82px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
              <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                <div className="relative font-medium mq450:text-base">
                  Others
                </div>
                <div className="relative box-border w-[92px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
              </div>
            </div>
          </div>



          <div
            className={`card ${flipped ? "flipped" : ""} `}
            onClick={handleClick}
          >
            <div className="card__container">
              
              <div className="card__face">
                {flipped ? <FlipCard_2 /> : <FlipCard_1 />}
              </div>
            </div>
          </div>




          {/* pagination */}
          <div className=" relative w-[612px] flex flex-row items-center justify-between gap-[20px] max-w-full shrink-0 text-5xl text-darkslategray-200 mq450:flex-wrap mq450:justify-center">
            <img
              className="relative w-[30px] h-[30px]"
              loading="eager"
              alt=""
              src={vector}
            />
            <div className="w-[272px] flex flex-row items-center justify-start gap-[43px] mq450:gap-[21px]">
              <img
                className="relative w-[60px] h-[60px] object-contain min-h-[60px]"
                alt=""
                src={vector_1}
              />
              <b className="relative mq450:text-lgi">01/10</b>
              <img
                className="relative w-[60px] h-[60px] min-h-[60px]"
                alt=""
                src={vector_2}
              />
            </div>
            <img className="relative w-[30px] h-[30px]" alt="" src={vector_3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relation;
