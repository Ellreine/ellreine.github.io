import React from 'react';
import { InformationLayout } from './information-layout';

export const Information = ({ props }) => {
	const { currentPlayer, isGameEnd, isDrow } = props;
	const status = isGameEnd ? 'Победил ' : isDrow ? 'Ничья' : 'Ходит ';
	return <InformationLayout status={status} currentPlayer={currentPlayer} />;
};
