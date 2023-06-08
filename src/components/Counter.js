import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const isCounterInvisible = useSelector((state) => state.isCounterInvisible);

	const dispatchFunction = useDispatch();

	const incrementHandler = () => {
		dispatchFunction({ type: 'INCR' });
	};

	const increaseHandler = () => {
		dispatchFunction({ type: 'INCREASE', number: 10 });
	};

	const decrementHandler = () => {
		dispatchFunction({ type: 'DECR' });
	};

	const toggleCounterHandler = () => {
		dispatchFunction({ type: 'VISIBILITY' });
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
