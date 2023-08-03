import { Dispatch } from 'redux';
import axios from 'axios';

import { EUsersActionType, TUsersActions } from '../../types/users';

export const fetchUsers = (value: string) => {
	return async (dispatch: Dispatch<TUsersActions>) => {
		try {
			dispatch({ type: EUsersActionType.FETCH_USERS });
			const response = await axios.get(
				`https://api.github.com/search/users?q=${value}`
			);
			dispatch({
				type: EUsersActionType.FETCH_USERS_SUCCESS,
				payload: response.data
			});
		} catch (error) {
			dispatch({
				type: EUsersActionType.FETCH_USERS_ERROR,
				payload: 'Ошибка...'
			});
		}
	};
};
