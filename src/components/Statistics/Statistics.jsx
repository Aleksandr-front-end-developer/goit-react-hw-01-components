import PropTypes from 'prop-types'; 
import { Item } from './Item';
import { Section }  from './Statistics.styled';

export const Statistics = ({ title, stats}) => {
			return (
				<Section className="statistics">
					{title && <h2 className="title">{title}</h2>}
					<ul className="stat-list">
						<Item stats={stats} />
				</ul>
			</Section>);
	
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(PropTypes.object).isRequired,	
}

