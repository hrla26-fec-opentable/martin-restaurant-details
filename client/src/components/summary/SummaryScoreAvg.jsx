import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/summary/SummaryScoreAvg';

const SummaryScoreAvg = (props) => (
  <div className={styles.summaryscoreavg}>
    <div className={styles.summaryscoreavgnum}>{props.score}</div>
    <div className={styles.summaryscoreavgcat}>{props.category}</div>
  </div>
);

SummaryScoreAvg.propTypes = {
  score: PropTypes.number.isRequired,
};

export default SummaryScoreAvg;
