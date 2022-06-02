import { WorkSpace } from "./workSpace";
export type Role = "Admin" | any
export type User = {
	email: string;
	name: string;
	userId: number;
	description: string;
	workSpaceList: Array<WorkSpace> | null
	role?:Role
	image: string | null;
}

export const userDummy= {
	userId: 123,
	email: 'dummyyy@google.com',
	name: '김상준',
	description: "안녕 내 이름은 김 상준이야",
	image: null,
	workSpaceList: []
}
export const userListDummy :Array<User> = [
	{
		userId: 1,
		email: 'dummyyy@google.com',
		name: '김상준',
		description: "안녕 내 이름은 김 상준이야",
		image: null,
		role:"admin",
		workSpaceList: []
	},
	{
		userId: 2,
		email: 'dummyyy@google.com',
		name: '이상준',
		description: "안녕 내 이름은 이 상준이야",
		image: null,
		workSpaceList: []
	},
	{
		userId: 13,
		email: 'dummyyy@google.com',
		name: '박상준',
		description: "안녕 내 이름은 박 상준이야",
		image: null,
		workSpaceList: []
	}

]