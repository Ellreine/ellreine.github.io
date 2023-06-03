import { WIN_PATTERNS } from '../constants/winPattern';

export function isDrowF(fields) {
	return fields.every((f) => f);
}

export function isWin(fields, currentPlayer) {
	return WIN_PATTERNS.some((winPattern) =>
		winPattern.every((index) => fields[index] === currentPlayer),
	);
}
