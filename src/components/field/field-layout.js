import styles from './field.module.css';
import { WIN_PATTERNS } from '../../constants/winPattern';
import { store } from '../../store';
import { Cell } from '../cell/cell';

export const FieldLayout = () => {
	const { field, winningLine, isGameEnd } = store.getState();
	const winCombo = WIN_PATTERNS[winningLine];

	return (
		<div className={styles.fields}>
			{field.map((f, idx) => (
				<Cell
					cell={{ idx, cell: f }}
					key={idx}
					className={
						styles.field +
						' ' +
						(isGameEnd && winCombo.includes(idx) ? styles.winningField : '')
					}
				/>
			))}
		</div>
	);
};
