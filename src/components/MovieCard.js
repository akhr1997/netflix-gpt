import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="movie image" />
    </div>
  );
};

export default MovieCard;
