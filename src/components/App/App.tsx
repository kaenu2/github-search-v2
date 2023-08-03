import { Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';

import { HomePage, ProfilePage } from '../../pages';

import './App.scss';

export const App = () => {
	return (
		<div>
			<Container maxWidth='xl'>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/user'
						element={<ProfilePage />}
					/>
				</Routes>
			</Container>
		</div>
	);
};
