import figure from '../assets';
export const XO = (player) => <img src={player === 'X' ? figure.cross : figure.circle} alt="" />;
