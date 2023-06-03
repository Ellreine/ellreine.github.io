import React from 'react';
import { XO } from '../../utils/figure';
import styles from './information.module.css';

export const InformationLayout = ({ status, currentPlayer }) => {
	return (
		<div className={styles.info}>
			{status}
			{status !== 'Ничья' && XO(currentPlayer, styles.image)}
		</div>
	);
};
