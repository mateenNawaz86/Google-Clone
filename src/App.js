import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {/* Home (the one with the search on) */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
