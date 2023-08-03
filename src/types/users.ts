export interface IUsersState {
	users: IUsers[];
	isLoading: boolean;
	error: string | null;
}

export interface IUsers {
	total_count: number;
	incomplete_results: boolean;
	items: Item[];
}

export interface Item {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}

export enum EUsersActionType {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface IFetchUsers {
	type: EUsersActionType.FETCH_USERS;
}
interface IFetchUsersSuccess {
	type: EUsersActionType.FETCH_USERS_SUCCESS;
	payload: IUsers;
}
interface IFetchUsersError {
	type: EUsersActionType.FETCH_USERS_ERROR;
	payload: string;
}

export type TUsersActions = IFetchUsers | IFetchUsersSuccess | IFetchUsersError;
