import React from 'react';
import { InformationLayout } from './information-layout';

export const Information = ({ props }) => {
	const { currentPlayer, isGameEnd, isDrow } = props;
	const status = isGameEnd ? 'Победа ' : isDrow ? 'Ничья' : 'Ход ';
	return <InformationLayout status={status} currentPlayer={currentPlayer} />;
};
