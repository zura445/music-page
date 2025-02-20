import React from "react";

function Header() {
  return (
    <div className="mx-6 lg:ml-[165px] md:mr-0 flex justify-between">
      <div className="">
        <h1 className="text-[40px] font-bold pt-10">equalizer</h1>
        <p className="text-[64px] md:text-[88px] font-bold mt-[64px] md:mt-[95px] lg:mt-[127px]">
          We make your music sound extraordinary.
        </p>
        <p className="mt-5 max-w-[825px]">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
      <div className="w-[266px] lg:w[312px] h-[400px] hidden md:block">
        <img
          className="max-w-full md:w-[312px] h-auto"
          src="/logo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
