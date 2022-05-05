import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import MainContainer from "./containers/MainContainer";
import RoomContainer from "./containers/RoomContainer";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<LoginContainer />} />
        <Route path="/room/:roomId" element={<RoomContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
