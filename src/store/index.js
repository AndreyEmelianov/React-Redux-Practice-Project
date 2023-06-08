import { legacy_createStore } from 'redux';

const initialState = { counter: 0, isCounterInvisible: false };

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCR') {
		return {
			counter: state.counter + 1,
			isCounterInvisible: state.isCounterInvisible,
		};
	}

	if (action.type === 'INCREASE') {
		return {
			counter: state.counter + action.number,
			isCounterInvisible: state.isCounterInvisible,
		};
	}

	if (action.type === 'DECR') {
		return {
			counter: state.counter - 1,
			isCounterInvisible: state.isCounterInvisible,
		};
	}

	if (action.type === 'VISIBILITY') {
		return {
			counter: state.counter,
			isCounterInvisible: !state.isCounterInvisible,
		};
	}

	return state;
};

const store = legacy_createStore(counterReducer);

export default store;
