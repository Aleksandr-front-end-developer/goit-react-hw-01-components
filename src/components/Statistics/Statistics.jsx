import PropTypes from 'prop-types';
import { Section } from './Statistics.styled';
import { getRandomHexColor } from './scripts';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <li key={id} className="item" style={{ backgroundColor: color }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
