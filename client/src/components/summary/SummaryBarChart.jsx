import React from 'react';
import PropTypes from 'prop-types';
import SummaryBarChartRow from './SummaryBarChartRow';
import styles from '../../styles/summary/SummaryBarChart';

const SummaryBarChart = (props) => (
  <div className={styles.summarybarchart}>
    {[5, 4, 3, 2, 1].map((score, i) => (
      <SummaryBarChartRow
        score={score}
        key={i}
        reviews={props.reviews}
        selectedFilters={props.selectedFilters}
        filterReviewsByScore={props.filterReviewsByScore}
        addOverallScoreFilter={props.addOverallScoreFilter}
        toggleFilter={props.toggleFilter}
      />
    ))}
  </div>
);

SummaryBarChart.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewsSummary: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  addOverallScoreFilter: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default SummaryBarChart;
