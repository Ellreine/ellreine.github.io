import { store } from '../../store';
import { XO } from '../../utils/figure';

export const Cell = ({ cell: propsCell, ...rest }) => {
	const { cell, idx } = propsCell;
	const { dispatch } = store;
	const { currentPlayer, isGameEnd, isDrow } = store.getState();
	const handleClick = (idx) => {
		if (cell || isGameEnd || isDrow) return;
		dispatch({ type: 'SET_FIELD', payload: { idx, currentPlayer } });
	};
	return (
		<button {...rest} onClick={() => handleClick(idx)}>
			{XO(cell)}
		</button>
	);
};
