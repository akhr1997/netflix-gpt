import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { LOGIN_BACKGROUND } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_BACKGROUND} alt="Background image" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
