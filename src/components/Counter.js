import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter.value);
	const isCounterInvisible = useSelector((state) => state.counter.isCounterInvisible);

	const dispatchFunction = useDispatch();

	const incrementHandler = () => {
		dispatchFunction(counterActions.incr());
	};

	const increaseHandler = () => {
		dispatchFunction(counterActions.increase(10));
	};

	const decrementHandler = () => {
		dispatchFunction(counterActions.decr());
	};

	const toggleCounterHandler = () => {
		dispatchFunction(counterActions.setCounterVisibility());
	};

	return (
		<main className={classes.counter}>
			<h1>Счётчик</h1>
			{!isCounterInvisible && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>+</button>
				<button onClick={increaseHandler}>+10</button>
				<button onClick={decrementHandler}>-</button>
			</div>
			<button onClick={toggleCounterHandler}>Спрятать / Показать</button>
		</main>
	);
};

export default Counter;
