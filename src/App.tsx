import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import RoomContainer from "./containers/RoomContainer";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/room/:roomId" element={<RoomContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
