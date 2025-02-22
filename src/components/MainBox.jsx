import React from "react";

function MainBox() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-[208px] md:w-[270px] lg:w-[312px]">
        <img
          className="w-full mt-[68px]"
          src="/phone-medium.png"
          alt="phone image"
        />
      </div>
      <div className="mt-4 md:hidden">
        <img
          className="w-full"
          src="/back-logo-small.png"
          alt="background image"
        />
      </div>
      <div className="mt-4 hidden md:block w-full lg:max-w-[1110px] md:max-w-[696px]">
        <img className="w-full" src="/back-logo.png" alt="background image" />
      </div>
    </div>
  );
}

export default MainBox;
