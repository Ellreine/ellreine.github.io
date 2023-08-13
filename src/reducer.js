import { isDrowF, isWinF } from './utils/check';

const SET_FIELD = 'SET_FIELD';
const SET_RESTART_GAME = 'SET_RESTART_GAME';

const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	isGameEnd: false,
	isDrow: false,
	currentPlayer: 'X',
	winningLine: null,
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_FIELD: {
			const newField = [...state.field];

			newField[payload.idx] = payload.currentPlayer;
			const isGameEnd = isWinF(newField, state.currentPlayer).isWin;
			const winningLine = isWinF(newField, state.currentPlayer).winIndex;
			const isDrow = isDrowF(newField);

			return {
				...state,
				field: newField,
				isGameEnd,
				winningLine,
				isDrow,
				currentPlayer: !isGameEnd && payload.currentPlayer === 'X' ? 'O' : 'X',
			};
		}

		case SET_RESTART_GAME:
			return {
				...initialState,
			};
		default:
			return state;
	}
};
