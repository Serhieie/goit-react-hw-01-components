import PropTypes from 'prop-types';
import randomColor from 'helpers/randonColor.js';
import { Item, Percentage } from './Stat.styled';

export default function Stat({ percentage, label, id }) {
  return (
    <Item key={id} style={{ backgroundColor: randomColor() }}>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
}

Stat.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
