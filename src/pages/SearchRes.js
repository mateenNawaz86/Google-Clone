import React from "react";
import { useSelector } from "react-redux";

const SearchRes = () => {
  const { payload } = useSelector((state) => state.search);
  
  return (
    <>
      <div className="searchPage">
        <div className="searchPage__header">
          <h1>{payload}</h1>
        </div>
        <div className="searchPage__body"></div>
      </div>
    </>
  );
};

export default SearchRes;
