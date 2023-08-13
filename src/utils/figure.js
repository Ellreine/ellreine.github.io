import figure from '../assets';
export const XO = (player, classes) => {
	return player ? (
		<img className={classes} src={player === 'X' ? figure.cross : figure.circle} alt="" />
	) : null;
};
