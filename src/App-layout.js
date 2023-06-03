import React from 'react';
import { Information } from './components/information/information';
import { Field } from './components/field/field';
import styles from './App.module.css';

export const AppLayout = ({ props }) => {
	const { field, currentPlayer, isGameEnd, isDrow, handleReset, handelClick } = props;
	return (
		<div className={styles.wrapper}>
			<Information props={{ currentPlayer, isGameEnd, isDrow }} />
			<Field field={field} onClick={handelClick} />
			<button className={styles.reset} onClick={handleReset}>
				Restart Game
			</button>
		</div>
	);
};
