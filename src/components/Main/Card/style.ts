import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  &:hover {
    box-shadow: 2px 2px 10px 2px #9d9d9dd3;
    transform: translate(-1%, -1%);
    transition: ease 0.2s;
  }
`;

export const WorkSpaceName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const CreatedAt = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
export const UserListWrapper = styled.div`
  margin-top: auto;
  bottom: 10px;
  display: flex;
  & > div {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }
`;