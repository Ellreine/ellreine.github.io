import React from 'react';
import { Information } from './components/information/information';
import { Field } from './components/field/field';
import styles from './App.module.css';
import { store } from './store';

export const AppLayout = () => {
	const handleReset = () => {
		store.dispatch({ type: 'SET_RESTART_GAME' });
	};
	return (
		<div className={styles.wrapper}>
			<Information />
			<Field />
			<button className={styles.reset} onClick={handleReset}>
				Restart Game
			</button>
		</div>
	);
};
