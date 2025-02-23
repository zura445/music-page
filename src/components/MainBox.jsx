import React from "react";

function MainBox() {
  return (
    <div className="flex justify-center flex-col items-center md:items-start lg:px-[165px]">
      <div className="w-[208px] md:w-[270px] lg:w-[312px] absolute top-[470px] lg:top-[300px] md:mt-[220px] md:left-[283px] z-10">
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
      <div className="w-full md:max-w-[400px] md:right-[350px] px-10 py-12 bg-orange absolute bottom-[-550px] text-white z-10 rounded-xl">
        <h2 className="text-3xl font-bold">Premium EQ</h2>
        <p className="text-lg mt-3">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <div className="flex items-center mt-6 h-20">
          <span className="font-bold text-[65px]">$4</span>
          <span className="text-xl ml-4">/ month</span>
        </div>
      </div>

      <div className="mt-[250px] hidden md:block w-full md:max-w-[696px] lg:max-w-[1110px] relative">
        <img className="w-full" src="/back-logo.png" alt="background image" />
      </div>
    </div>
  );
}

export default MainBox;
