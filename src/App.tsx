import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthCheckerContainer from "./containers/AuthCheckerContainer";
import AuthRedirectContainer from "./containers/AuthRedirectContainer";
import InviteRedirectContainer from "./containers/InviteRedirectContainer";
import WorkSpaceContainer from "./containers/WorkSpaceContainer";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RedirectPage from "./pages/RedirectPage";
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
        <Route path="auth" element={<AuthRedirectContainer />} />
        <Route path="invite" element={<InviteRedirectContainer />} />
        <Route path="redirect" element={<RedirectPage />} />
        <Route path="*" element={<div> 페이지가 없습니다 </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
