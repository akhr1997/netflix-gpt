import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-65">
          ▶️ Play Now
        </button>
        <button className="bg-gray-500 mx-2 text-white p-4 px-12 text-xl rounded-lg bg-opacity-90 hover:bg-opacity-65">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
