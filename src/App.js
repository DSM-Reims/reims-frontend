import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // eslint-disable-line no-unused-vars
import Main from "./component/Main";
import Requirements from "./component/requirements";
import ResultUpload from "./component/common/resultuploda";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":code">
          <Route path="home" element={<Main />}></Route>
          <Route path="requirement" element={<Requirements />} />
          <Route path="resultupload" element={<ResultUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
