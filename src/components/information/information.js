import React from 'react';
import { store } from '../../store';
import { InformationLayout } from './information-layout';

export const Information = () => {
	const { isGameEnd, isDrow } = store.getState();
	const status = isGameEnd ? 'Победа ' : isDrow ? 'Ничья' : 'Ход ';
	return <InformationLayout status={status} />;
};
