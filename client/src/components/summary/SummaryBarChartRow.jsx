import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/summary/SummaryBarChartRow';

const SummaryBarChartRow = (props) => {
  const totalReviewsCount = props.reviews.length;
  const scoreReviewsCount = props.reviews.filter(review => (review.overall_score === props.score)).length;
  const scorePct = scoreReviewsCount / totalReviewsCount || 0;

  return (
    <div className={styles.summarybarchartrow} onClick={ () => {
      if (!props.selectedFilters.includes(`${props.score} Stars`)) {
        props.addOverallScoreFilter(`${props.score} Stars`);
      }
    }}>
      <span className={styles.summarybarchartrownum}>{props.score}</span>
      <div className={styles.summarybarchartbar}>
        <div className={styles.summarybarchartbarred} style={{width: `${100*scorePct}%`}}></div>
        <div className={styles.summarybarchartbarwhite} style={{width: `${100*(1 - scorePct)}%`}}></div>
      </div>
    </div>
  );
};

SummaryBarChartRow.propTypes = {
  score: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  addOverallScoreFilter: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default SummaryBarChartRow;
