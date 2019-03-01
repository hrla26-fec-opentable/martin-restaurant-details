import React from 'react';
import SummaryText from './SummaryText';
import SummaryBarChart from './SummaryBarChart';
import LovedFor from './LovedFor';
import styles from '../../styles/summary/Summary';

const Summary = (props) => (
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

export default Summary;
