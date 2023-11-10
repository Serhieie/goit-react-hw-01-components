import PropTypes from 'prop-types';
import Stat from '../Stat';
import { Statistics, Title, List } from './StatsList.styled';

export default function StatsList({ stats, title }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(el => (
          <Stat percentage={el.percentage} label={el.label} key={el.id} />
        ))}
      </List>
    </Statistics>
  );
}

StatsList.propTypes = {
  title: PropTypes.string,
};
