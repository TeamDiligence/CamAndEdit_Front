import styled from "@emotion/styled";
import { ProfileIcon } from "../../../lib/asset";

const UserProfile: React.FC<{ name: string; image: string | null }> = ({
  name,
  image,
}) => {
  const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const ProfileImage = ({ image }: { image: string }) => {
    return <img src={image} alt={""} width="20px" height="20px" />;
  };

  const Name = styled.div`
    font-size: 0.3rem;
    color: gray;
  `;
  return (
    <UserWrapper>
      {image ? (
        <ProfileImage image={image} />
      ) : (
        <ProfileIcon width={20} height={20} />
      )}
      <Name>{name}</Name>
    </UserWrapper>
  );
};

export default UserProfile;
