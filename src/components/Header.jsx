import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-24 lg:w-[142px]" src="logo-white.png" alt="logo" />
        </div>
        <ul className="text-[20px] flex gap-8 text-white lg:text-[34px]">
          <a className="transition-all" href="#about">
            <li className="cursor-pointer hover:text-[#818183]">About</li>
          </a>
          <a href="https://t.me/firkabio" target="_blank">
            <li className="cursor-pointer hover:text-[#818183]">Blog</li>
          </a>
          <a href="tel:+998200001085">
            <li className="cursor-pointer hover:text-[#818183]">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
