import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { value: 0, isCounterInvisible: false };
const initialUserAuthState = { isUserLoggedIn: false };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		incr(state) {
			state.value++;
		},
		decr(state) {
			state.value--;
		},
		increase(state, action) {
			state.value = state.value + action.payload;
		},
		setCounterVisibility(state) {
			state.isCounterInvisible = !state.isCounterInvisible;
		},
	},
});

const userAuthSlice = createSlice({
	name: 'userAuth',
	initialState: initialUserAuthState,
	reducers: {
		logIn(state) {
			state.isUserLoggedIn = true;
		},
		signOut(state) {
			state.isUserLoggedIn = false;
		},
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: userAuthSlice.reducer,
	},
});

export const counterActions = counterSlice.actions;
export const userAuthAction = counterSlice.actions;

export default store;
