import { legacy_createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'INCR') {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === 'INCREASE') {
		return {
			counter: state.counter + action.number,
		};
	}

	if (action.type === 'DECR') {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

const store = legacy_createStore(counterReducer);

export default store;
