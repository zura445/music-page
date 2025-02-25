import React from "react";

function Header() {
  return (
    <div className="mx-6 md:mr-0 flex justify-between relative">
      <div className="md:max-w-[520px] lg:max-w-[700px]">
        <h1 className="text-[40px] font-bold pt-10">equalizer</h1>
        <p className="text-[40px] md:text-[48px] lg:text-[64px] font-bold mt-[64px] md:mt-[95px] lg:mt-[127px] ">
          We make your music sound extraordinary.
        </p>
        <p className="mt-5 max-w-[825px]">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </div>
  );
}

export default Header;
