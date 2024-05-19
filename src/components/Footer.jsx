import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <div>
          <span className="text-white">&copy; 2024 «Firka Uz»</span>
        </div>
        <div className="flex gap-3">
          <div>
            <a href="https://t.me/Firdavs1008" target="_blank">
              <img
                className="hover:bg-slate-400 animate-pulse rounded-[50%] cursor-pointer md:w-[35px]"
                src="tg.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/firdavs_1008_" target="_blank">
              <img
                className="hover:bg-slate-400 animate-pulse rounded-[50%] cursor-pointer md:w-[35px]"
                src="insta.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="tel:+998200001085">
              <img
                className="hover:bg-slate-400 animate-pulse rounded-[50%] cursor-pointer md:w-[35px]"
                src="phone.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
