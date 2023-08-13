import { WIN_PATTERNS } from '../constants/winPattern';

export function isDrowF(fields) {
	return fields.every((f) => f);
}

export function isWinF(fields, currentPlayer) {
	let winIndex = null;
	const isWin = WIN_PATTERNS.some((winPattern, idx) => {
		return winPattern.every((index) => {
			winIndex = idx;
			return fields[index] === currentPlayer;
		});
	});
	return { winIndex, isWin };
}
