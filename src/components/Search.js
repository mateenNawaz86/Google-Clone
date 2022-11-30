import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Button from "@mui/material/Button";
import { search } from "../store/SearchSlice";
import { useDispatch } from "react-redux";

const Search = ({ hideButtons }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    // dispatch an action is here
    dispatch(search(input));
    console.log(search(input));

    // navigate to the search results
    navigate("/search");
  };

  return (
    <form>
      <div
        className="flex items-center border border-gray-300 h-8 px-3 py-5 rounded-full w-min_screen my-0 mx-auto  max-w-xl"
        title="Search"
      >
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          className="flex-1 text-base border-0 px-3 leading-5 focus:outline-none"
          value={input}
          onChange={inputChangeHandler}
        />
        <div className="space-x-2 ">
          <MicIcon className="text-gray-400" />
          <CenterFocusStrongIcon className="text-gray-400" />
        </div>
      </div>
      {!hideButtons ? (
        <div className="mt-8 flex justify-center space-x-3">
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "#f8f8f8",
              color: "#5f6368",
              border: "1px solid #fff",

              ":hover": {
                bgColor: "#f8f8f8",
                bgImage: "-webkit-linear-gradient(top, #f8f8f8 0, #f1f1f1)",
                color: "#222",
                border: "1px solid #c6c6c6",
                boxShadow: "0 1px 1px rgba(0,0,0, 0.1)",
              },
            }}
            onClick={searchHandler}
            type="submit"
          >
            Google Search
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "#f8f8f8",
              color: "#5f6368",
              border: "1px solid #fff",

              ":hover": {
                bgColor: "#f8f8f8",
                bgImage: "-webkit-linear-gradient(top, #f8f8f8 0, #f1f1f1)",
                color: "#222",
                border: "1px solid #c6c6c6",
                boxShadow: "0 1px 1px rgba(0,0,0, 0.1)",
              },
            }}
          >
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="mt-8 hidden">
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "#f8f8f8",
              color: "#5f6368",
              border: "1px solid #fff",

              ":hover": {
                bgColor: "#f8f8f8",
                bgImage: "-webkit-linear-gradient(top, #f8f8f8 0, #f1f1f1)",
                color: "#222",
                border: "1px solid #c6c6c6",
                boxShadow: "0 1px 1px rgba(0,0,0, 0.1)",
              },
            }}
            onClick={searchHandler}
            type="submit"
          >
            Google Search
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "#f8f8f8",
              color: "#5f6368",
              border: "1px solid #fff",

              ":hover": {
                bgColor: "#f8f8f8",
                bgImage: "-webkit-linear-gradient(top, #f8f8f8 0, #f1f1f1)",
                color: "#222",
                border: "1px solid #c6c6c6",
                boxShadow: "0 1px 1px rgba(0,0,0, 0.1)",
              },
            }}
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
