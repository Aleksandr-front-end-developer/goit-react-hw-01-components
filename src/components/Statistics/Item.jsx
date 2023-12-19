import { getRandomHexColor } from './scripts';

export const Item = ({ stats }) => {
	return stats.map(({ id, label, percentage }) => {
		const color = getRandomHexColor();
		return (<li key={id} className="item" style={{ backgroundColor: color}}>
						<span className="label">{label}</span>
						<span className="percentage">{percentage}%</span>
					</li>);
	})
};

