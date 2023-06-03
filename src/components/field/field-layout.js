import React from 'react';
import styles from './field.module.css';
import { XO } from '../../utils/figure';

export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.fields}>
			{field.map((f, idx) => (
				<button key={idx} onClick={() => onClick(idx)} className={styles.field}>
					{XO(f)}
				</button>
			))}
		</div>
	);
};
