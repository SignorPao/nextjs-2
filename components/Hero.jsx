import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="text-red-500 font-bold text-7xl font-fira">Hero</h1>
        <p className="text-2xl text-center max-w-screen-md font-inter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          voluptates porro odio iusto blanditiis atque eos aspernatur
          necessitatibus corporis pariatur.
        </p>
        <p className="text-2xl text-center max-w-screen-md text-blue-500 font-fira">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          voluptates porro odio iusto blanditiis atque eos aspernatur
          necessitatibus corporis pariatur.
        </p>
      </div>
    </div>
  );
};

export default Hero;
