import styles from './field.module.css';
import { XO } from '../../utils/figure';
import { WIN_PATTERNS } from '../../constants/winPattern';

export const FieldLayout = ({ field, onClick, winningLine, isGameEnd }) => {
	const winCombo = WIN_PATTERNS[winningLine];
	return (
		<div className={styles.fields}>
			{field.map((f, idx) => (
				<button
					key={idx}
					onClick={() => {
						if (f === '') {
							onClick(idx);
							console.log(winningLine);
						}
					}}
					className={
						styles.field +
						' ' +
						(isGameEnd && winCombo.includes(idx) ? styles.winningField : '')
					}
				>
					{f && XO(f)}
				</button>
			))}
		</div>
	);
};
