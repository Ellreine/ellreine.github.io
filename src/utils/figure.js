import figure from '../assets';
export const XO = (player, classes) => (
	<img className={classes} src={player === 'X' ? figure.cross : figure.circle} alt="" />
);
