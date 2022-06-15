import { useState } from "react";
import { useRecoilState } from "recoil";
import ProfileModal from "../components/common/Modal/Profile/ProfileModal";
import { getUserInfo, patchUserInfo } from "../lib/api/user";
import { userAtom } from "../states/main";

export type EditValue = {
  name: string;
  description: string;
};

const ProfileModalContainer = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [reFresh, setReFresh] = useState<boolean>(false);
  //   const [profile,setProfile] = useState()

  const handlePatchUserInfo = async (editValue: EditValue) => {
    const { name, description } = editValue;
    const beforeUserData = { name: user.name, description: user.description };
    return await patchUserInfo({ name, description, beforeUserData });
  };
  const handleSubmit = async (editValue: EditValue) => {
    console.log(editValue);
    await handlePatchUserInfo(editValue);
    const userInfo = await getUserInfo();
    console.log(userInfo.data);
    await (async () => {
      setUser(userInfo.data);
    })();
  };

  return <ProfileModal user={user} handleSubmit={handleSubmit} />;
};

export default ProfileModalContainer;
