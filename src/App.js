import { useState } from 'react';
import { field as initialState } from './constants/field';
import { AppLayout } from './App-layout';
import { isDrowF, isWinF } from './utils/check';
import { WIN_PATTERNS } from './constants/winPattern';

function App() {
	const [field, setField] = useState(initialState);
	const [isGameEnd, setIsGameEnd] = useState(false);
	const [isDrow, setIsDrow] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [winningLine, setWinningLine] = useState(null);

	const handleReset = () => {
		setField(initialState);
		setIsDrow(false);
		setIsGameEnd(false);
		setCurrentPlayer('X');
		setWinningLine([]);
	};

	const handelClick = (idx) => {
		if (isDrow || isGameEnd || field[idx]) return;

		const newField = field.map((f, index) => (index === idx ? currentPlayer : f));
		setField(newField);

		const { isWin, winIndex } = isWinF(newField, currentPlayer);

		if (isWin) {
			setIsGameEnd(true);
			setWinningLine(winIndex);
			return;
		}

		if (isDrowF(newField)) {
			setIsDrow(true);
			return;
		}

		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
	};
	console.log(winningLine);
	return (
		<AppLayout
			props={{
				field: Array.isArray(field) ? field : [],
				currentPlayer,
				isGameEnd,
				isDrow,
				handleReset,
				handelClick,
				winningLine,
			}}
		/>
	);
}

export default App;
