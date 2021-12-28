import propTypes from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import { List, ListItem } from './statistics.styles';

const Statistics = ({ items, TotalFeedback, PositiveFeedback, state }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={item.id}>
          {item.type}: {state[index]}
        </ListItem>
      ))}
      <ListItem key="total"> Total: {TotalFeedback}</ListItem>
      <ListItem key="posFeed">Positive feedback: {PositiveFeedback}%</ListItem>
    </List>
  );
};
Statistics.propTypes = {
  TotalFeedback: PropTypes.func.isRequired,
  PositiveFeedback: PropTypes.func.isRequired,
  state: propTypes.shape.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};
export default Statistics;
