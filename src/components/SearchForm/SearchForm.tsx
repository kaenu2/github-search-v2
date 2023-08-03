import { useState } from 'react';

import { Button } from '@mui/material';

import './SearchForm.scss';

export const SearchForm = () => {
	const [value, setValue] = useState('');

	const onChengeSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<form className='form-search'>
			<input
				type='search'
				value={value}
				onChange={event => onChengeSetValue(event)}
				placeholder='Поиск'
			/>
			<Button variant='contained'>{'>'}</Button>
		</form>
	);
};
