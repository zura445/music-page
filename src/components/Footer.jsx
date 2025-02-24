import React from "react";

function Footer() {
  return (
    <div className="mt-20 md:mt-40 md:flex md:mb-20 lg:mx-[165px] px-6 lg:px-0">
      <p className="text-[40px] font-bold hidden lg:block mt-10">equalizer</p>

      <div className="block md:flex justify-between w-full items-center">
        <div className="lg:ml-[120px] lg:max-w-[366px]">
          <p className="text-[40px] font-bold lg:hidden">equalizer</p>
          <div className="flex justify-between w-full">
            <p className="mt-8 max-w-[366px]">
              All rights reserved © Equalizer 2021 Have any problems? Contact us
              via social media or email us at <span>equalizer@example.com</span>
            </p>
            <div className=" flex gap-5 mt-[64px] mb-[80px]">
              <button className="w-10">
                <img src="/facebook.png" alt="facebook logo" />
              </button>
              <button className="w-10">
                <img src="/instagram.png" alt="instagram logo" />
              </button>
              <button className="w-10">
                <img src="/twitter.png" alt="twitter logo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
