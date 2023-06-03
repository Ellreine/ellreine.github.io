import React from 'react';

export const InformationLayout = ({ status, currentPlayer }) => {
	return (
		<div>
			{status}
			{status !== 'Ничья' && currentPlayer}
		</div>
	);
};
