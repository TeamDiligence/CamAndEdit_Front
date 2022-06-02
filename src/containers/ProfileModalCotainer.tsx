import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import ProfileModal from "../components/common/Modal/ProfileModal";
import { getUserInfo, patchUserInfo } from "../lib/api/user";
import { userAtom } from "../states/main";

const ProfileModalContainer = () => {
  const user = useRecoilValue(userAtom);
  //   const [profile,setProfile] = useState()
  const handlePatchUserInfo = async ({
    name,
    description,
  }: {
    name?: string;
    description?: string;
  }) => {
    const beforeUserData = { name: user.name, description: user.description };
    console.log(await patchUserInfo({ name, description, beforeUserData }));
  };

  const profile = useEffect(() => {
    (async () => {})();
  });

  return <ProfileModal user={user} />;
};

export default ProfileModalContainer;
