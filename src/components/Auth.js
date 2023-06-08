import { useDispatch } from 'react-redux';

import { userAuthAction } from '../store/user-auth-slice';

import classes from './Auth.module.css';

const Auth = () => {
	const dispatchFunction = useDispatch();

	const logInHandler = (event) => {
		event.preventDefault();

		dispatchFunction(userAuthAction.logIn());
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={logInHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Пароль</label>
						<input type="password" id="password" />
					</div>
					<button>Войти</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
