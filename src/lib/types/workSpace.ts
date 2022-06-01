import { User } from "./user";

export interface WorkSpace {
    id: number;
    name: string;
    createdAt: Date;
    adminUserId: number,
    memberList: Array<User>
    meetingRoom: Array<MeetingRoom>,
    camList:any,
}



export interface MeetingRoom {
    

}

export interface CamList {
    
}

export const WorkSpaceDummy = {
    id: 12312313,
    name: "임시 워크스페이스이스이스이스",
    createAt: new Date(),
}
export const WorkSpaceDummy1 = {
    id: 1231231223,
    name: "테스트테스트테스트테스트테스트테스트",
    createAt: new Date(),
}
export const WorkSpaceDummy2 = {
    id: 1231233333333,
    name: "상준의 워크스페이스",
    createAt: new Date(),
}
export const WorkSpaceDummy3= {
    id: 123123555444513,
    name: "캡스톤 디자인캡스톤 디자인캡스톤 디자인",
    createAt: new Date(),
}
