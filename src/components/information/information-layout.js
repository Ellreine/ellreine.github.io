import React from 'react';
import { store } from '../../store';
import { XO } from '../../utils/figure';
import styles from './information.module.css';

export const InformationLayout = ({ status }) => {
	const { currentPlayer } = store.getState();
	return (
		<div className={styles.info}>
			{status}
			{status !== 'Ничья' && XO(currentPlayer, styles.image)}
		</div>
	);
};
