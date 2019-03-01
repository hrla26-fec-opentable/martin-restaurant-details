import React from 'react';
import PropTypes from 'prop-types';
import SummaryText from './SummaryText';
import SummaryBarChart from './SummaryBarChart';
import LovedFor from './LovedFor';
import styles from '../../styles/summary/Summary';

const Summary = props => (
  <div className={styles.summary}>
    <div className={styles.summaryheader}>
      What {props.reviewsSummary.total_reviews} People Are Saying
    </div>
    <div className={styles.summarybody}>
      <SummaryText reviewsSummary={props.reviewsSummary} />
      <SummaryBarChart
        reviews={props.reviews}
        reviewsSummary={props.reviewsSummary}
        selectedFilters={props.selectedFilters}
        addOverallScoreFilter={props.addOverallScoreFilter}
        toggleFilter={props.toggleFilter}
      />
    </div>
    <LovedFor />
  </div>
);

Summary.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewsSummary: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  addOverallScoreFilter: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default Summary;
