import React, { useState } from "react";
import frame_7 from "../images/frame-7.svg";

const FrameComponent = () => {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleClick1 = () => {
    setSelected1(!selected1);
  };

  const handleClick2 = () => {
    setSelected2(!selected2);
  };

  return (
    <div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] w-[848px] text-left text-base text-gray font-med mq450:gap-[16px]">
        <div
          className={`relative cursor-pointer self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue transition-all duration-300 ${
            selected ? "open" : "closed"
          }`}
          onClick={handleClick}
        >
          <div className="relative leading-[26px] font-semibold">
            Can education flashcards be used for all age groups?
            {selected && (
              <p className="text-dimgray">
                Yes, education flashcards can be tailored to different age
                groups and learning levels. There are flashcards designed for
                preschoolers, elementary school students, high school students,
                and even for college-level and adult learners.
              </p>
            )}
          </div>
          <div className="absolute top-[17px] right-[20px]">
            <img
              className={`w-6 h-6 overflow-hidden shrink-0 transform rotate-${

                selected ? "180" : "0"
              }`}
              alt="frame_7"
              src={frame_7}
            />
          </div>
        </div>

        <div
          className={`relative cursor-pointer self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue transition-all duration-300 ${
            selected1 ? "open" : "closed"
          }`}
          onClick={handleClick1}
        >
          <div className="leading-[26px] font-semibold">
            How do education flashcards work?
            {selected1 && (
              <p className="text-dimgray">
                Education flashcards work by presenting a question or prompt on
                one side and the corresponding answer or information on the
                other. Users can review the cards repeatedly, reinforcing their
                memory and enhancing learning through repetition.
              </p>
            )}
          </div>
          <div className="absolute top-[17px] right-[20px]">
            <img
              className={`w-6 h-6 overflow-hidden shrink-0 transform rotate-${

                selected1 ? "180" : "0"
              }`}
              alt="frame_7"
              src={frame_7}
            />
          </div>
        </div>

        <div
          className={`relative cursor-pointer self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue transition-all duration-300 ${
            selected2 ? "open" : "closed"
          }`}
          onClick={handleClick2}
        >
          <div className="leading-[26px] font-semibold">
            Can education flashcards be used for test preparation?
            {selected2 && (
              <p className="text-dimgray">
                Absolutely. Flashcards are an excellent tool for test
                preparation, allowing students to review key concepts, terms,
                and facts. They provide a quick and focused way to reinforce
                knowledge before exams.
              </p>
            )}
          </div>
          <div className="absolute top-[17px] right-[20px]">
            <img
              className={`w-6 h-6 overflow-hidden shrink-0 transform rotate-${
                
                selected2 ? "180" : "0"
              }`}
              alt="frame_7"
              src={frame_7}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
