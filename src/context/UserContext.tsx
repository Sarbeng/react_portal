import  { useState, useEffect, createContext } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../components/isAuthenticated';

interface Props {
	children: JSX.Element;
}

import Login from '../pages/Login/LoginPage';

const UserContext = createContext();

export const UserProvider = (props:Props) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = isAuthenticated();
			if (cuser === null) {
				localStorage.setItem('user', '');
				cuser = '';
			}

			setCurrentUser(cuser);
		};

		checkLoggedIn();
	}, []);

	console.log('usercontext', currentUser);

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{ currentUser ? props.children : <Login />}
		</UserContext.Provider>
	);
};


export default UserContext;