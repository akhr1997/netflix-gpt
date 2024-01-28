import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center rounded-lg">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What you in a mood for?"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
