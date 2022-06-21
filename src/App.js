import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // eslint-disable-line no-unused-vars
import Main from "./component/Main";
import Requirements from "./component/requirements";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/requirement" element={<Requirements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
