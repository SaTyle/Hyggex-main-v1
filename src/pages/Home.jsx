import React from "react";
import logo from "../images/logo.png";
import home from "../images/Home.svg";
import frame_1 from "../images/frame-1.svg";
import frame_2 from "../images/frame-2.svg";
import Card from "../components/Relation";
import FlashCard from "../components/FlashCard";
import FrameComponent from "../components/FrameComponent"

const Home = () => {
  return (
    <>
      <header className="w-[1233px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-lg text-darkslategray-100 font-med mq750:w-[708px]">
        <img
          className=" w-[191px] h-[39px] object-cover"
          loading="lazy"
          src={logo}
          alt="logo"
        />

        {/* navbar */}
        <div className="flex flex-row items-center justify-start gap-[40px] max-w-full mq675:gap-[20px] mq750:hidden">
          <div className="w-[282px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative">Home</div>
            <div className="relative">Flashcard</div>
            <div className="relative">Contact</div>
          </div>
          <div className="relative">FAQ</div>
          <button className="cursor-pointer [border:none] p-[13px] bg-[transparent] rounded-[32px] [background:linear-gradient(180deg,_#06286e,_#164ec0)] w-32 flex flex-row items-center justify-center box-border">
            <div className="relative text-lg font-medium font-med text-white text-left">
              Login
            </div>
          </button>
        </div>
      </header>

      {/*hero section */}
      <main className="w-[1236px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[64px] max-w-full text-center text-lg text-dimgray font-med mq450:gap-[16px] mq675:gap-[32px]">
        <div className="flex flex-row items-center justify-start [row-gap:20px] max-w-full mq675:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
              loading="lazy"
              alt="Home"
              src={home}
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src={frame_1}
            />
            <div className="relative font-medium">Flashcard</div>
          </div>
          <div className="flex flex-row items-center justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src={frame_2}
            />
            <div className="relative font-medium">Mathematics</div>
            <div className="flex flex-row items-center justify-start text-darkslateblue">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src={frame_2}
              />
              <div className="relative font-semibold">
                Relation and Function
              </div>
            </div>
          </div>
        </div>

        {/* card  */}
        <Card />

        <FlashCard />
      
        <section className="w-[848px] flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-[48px] font-med mq450:gap-[24px]">
          <h1 className="m-0 relative text-inherit tracking-[0.01em] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[29px] mq750:text-[38px]">
            FAQ
          </h1>
          <FrameComponent/>
        </section>
      </main>
    </>
  );
};

export default Home;
