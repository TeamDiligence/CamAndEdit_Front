export type User = {
	userId: number;
	email: string;
	name: string;
	description: string;
	image: string | null;
    workSpace: Array<any> | null
}

export const userDummy= {
	userId: 123,
	email: 'dummyyy@google.com',
	name: '김상준',
	description: "안녕 내 이름은 김 상준이야",
	image: null,
	workSpace: []
}
export const userListDummy = [
	{
		userId: 1,
		email: 'dummyyy@google.com',
		name: '김상준',
		description: "안녕 내 이름은 김 상준이야",
		image: null,
		workSpace: []
	},
	{
		userId: 2,
		email: 'dummyyy@google.com',
		name: '이상준',
		description: "안녕 내 이름은 이 상준이야",
		image: null,
		workSpace: []
	},
	{
		userId: 13,
		email: 'dummyyy@google.com',
		name: '박상준',
		description: "안녕 내 이름은 박 상준이야",
		image: null,
		workSpace: []
	}

]