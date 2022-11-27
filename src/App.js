import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchRes from "./pages/SearchRes";

const App = () => {
  return (
    <>
      <Routes>
        {/* Home (the one with the search on) */}
        <Route path="/" element={<Home />} />

        {/* SearchRes { showing the results} */}
        <Route path="/search" element={<SearchRes />} />
      </Routes>
    </>
  );
};

export default App;
