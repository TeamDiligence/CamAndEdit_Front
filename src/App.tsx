import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthCheckerContainer from "./containers/AuthCheckerContainer";
import WorkSpaceContainer from "./containers/WorkSpaceContainer";
import AuthRedirectPage from "./pages/AuthRedirectPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import WorkSpacePage from "./pages/WorkSpacePage";
const App = () => {
  // console.log("app 오나?");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthCheckerContainer />}>
          <Route path="main" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="workspace" element={<WorkSpacePage />}>
            <Route path=":id" caseSensitive element={<WorkSpaceContainer />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthRedirectPage />} />
        <Route path="*" element={<div> 페이지가 없습니다 </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
