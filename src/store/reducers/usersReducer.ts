import {
	EUsersActionType,
	IUsersState,
	TUsersActions
} from '../../types/users';

const initialState: IUsersState = {
	users: [],
	error: null,
	isLoading: false
};

export const usersReducer = (
	state = initialState,
	action: TUsersActions
): IUsersState => {
	switch (action.type) {
		case EUsersActionType.FETCH_USERS:
			return state;
		case EUsersActionType.FETCH_USERS_SUCCESS:
			return state;
		case EUsersActionType.FETCH_USERS_ERROR:
			return state;
		default:
			return state;
	}
};
