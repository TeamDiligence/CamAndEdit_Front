import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import InviteModal from "../components/common/Modal/InviteModal/InviteModal";
import NavigationBar from "../components/Navbar/Navbar";
import CamListContainer from "../containers/CamListContainer";
import MeetingRoomContainer from "../containers/MeetingRoomContainer";
import { PageLayout } from "../lib/styles/layout";
import { inviteModalStateAtom } from "../states/workspace";

const WorkSpacePage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const inviteModalState = useRecoilValue<boolean>(inviteModalStateAtom);
  if (!param.id) {
    navigate("/main", { replace: false });
  }

  return (
    <PageLayout>
      <NavigationBar type="workSpace" />
      <MeetingRoomContainer />
      <CamListContainer />
      <Outlet /> {/* OutLet에 워크스페이스 nest 라우팅 */}
      {inviteModalState && <InviteModal />}
    </PageLayout>
  );
};

export default WorkSpacePage;
