import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import WebIcon from "@mui/icons-material/Web";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchOptions = () => {
  return (
    <div className="flex justify-between items-center w-9/13 m-auto mt-6 pb-3">
      <div className="flex items-center text-[#969BA1] space-x-5">
        <div className="space-x-1">
          <SearchIcon />
          <Link to="/all">All</Link>
        </div>
        <div className="space-x-1">
          <WebIcon />
          <Link to="/news">News</Link>
        </div>
        <div className="space-x-1">
          <ImageIcon />
          <Link to="/images">Images</Link>
        </div>
        <div className="space-x-1">
          <SmartDisplayIcon />
          <Link to="/videos">Videos</Link>
        </div>
        <div className="space-x-1">
          <MoreVertIcon />
          <Link to="/more">More</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;
