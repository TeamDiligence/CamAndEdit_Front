import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthCheckerContainer from "./containers/AuthCheckerContainer";
import WorkSpaceContainer from "./containers/WorkSpaceContainer";
import InviteRedirectPage from "./pages/InviteRedirectPage";
import LoginPage from "./pages/LoginPage";
import LoginRedirectPage from "./pages/LoginRedirectPage";
import MainPage from "./pages/MainPage";
import WorkSpacePage from "./pages/WorkSpacePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/test" element={<ProfileModal />}></Route> */}
        <Route path="/" element={<AuthCheckerContainer />}>
          <Route path="main" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="workspace" element={<WorkSpacePage />}>
            <Route path=":id" caseSensitive element={<WorkSpaceContainer />} />
          </Route>
        </Route>
        <Route path="auth" element={<LoginRedirectPage />} />
        <Route path="invite" element={<InviteRedirectPage />} />

        <Route path="*" element={<div> 페이지가 없습니다 </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
