import React from "react";

function Main() {
  return (
    <div className="container">
      <div className="mb-[50px] lg:flex justify-between items-center px-[60px]">
        <h1 className="text-white text-center text-[35px] lg:text-[80px]">
          Abduvakhobov <br /> Firdavs
        </h1>
        <div className="flex justify-center">
          <img
            className="w-[220px] rounded-[20px] lg:w-[450px]"
            src="Firdavs.jpg"
            alt="F"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
