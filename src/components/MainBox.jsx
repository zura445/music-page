import React from "react";

function MainBox() {
  return (
    <div className="relative flex justify-center flex-col items-center md:items-start">
      <div className="w-[208px] md:w-[270px] lg:w-[312px] absolute top-0 md:top-[370px] lg:top-[300px] md:mt-[-330px] md:left-[100px] lg:left-[125px] z-10">
        <img
          className="w-full mt-[68px]"
          src="/phone-medium.png"
          alt="phone image"
        />
      </div>

      <div className="md:hidden mt-[166px] w-full relative">
        <img
          className="w-full"
          src="/back-logo-small.png"
          alt="background image"
        />
      </div>

      <div className="mt-[250px] w-full md:max-w-[696px] lg:max-w-[1110px] relative md:ml-5">
        <img
          className="w-full md:h-[600px] hidden md:block"
          src="/back-logo.png"
          alt="background image"
        />

        <div className="w-full md:max-w-[400px] md:right-[50px] px-10 py-12 bg-orange absolute bottom-[-50px] md:bottom-[-130px] text-white z-10 rounded-xl block">
          <h2 className="text-3xl font-bold">Premium EQ</h2>
          <p className="text-lg mt-3">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <div className="flex items-center mt-6 h-20">
            <span className="font-bold text-[65px]">$4</span>
            <span className="text-xl ml-4">/ month</span>
          </div>
          <div className="bg-black hover:bg-sky flex justify-center mt-8 py-4 rounded-lg">
            <button>
              <img src="/ios.png" alt="ios image" />
            </button>
            <span className="text-lg font-bold ml-2">iOS Download</span>
          </div>
          <div className="bg-white hover:bg-lightOrange flex justify-center mt-4 py-4 rounded-lg">
            <button>
              <img src="/android.png" alt="android image" />
            </button>
            <span className="text-lg text-black font-bold ml-2">
              Android Download
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBox;
