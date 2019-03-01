import React from 'react';
import PropTypes from 'prop-types';
import DateFns from 'date-fns';
import styles from '../../styles/reviewslist/ReviewRatings.css';

const ReviewRatings = (props) => (
  <div className={styles.reviewratings}>
    <div className={styles.reviewheader}>
      <div className={styles.reviewstars}>
        <span className={styles.reviewredstars}>{`${("★ ").repeat(props.review.overall_score)}`}</span>
        <span className={styles.reviewgreystars}>{`${("★ ").repeat(5 - props.review.overall_score)}`}</span>
      </div>
      <div className={styles.reviewdinedondate}>
        <span>{
          (() => {
            let currDate = new Date();
            let dineDate = new Date(props.review.dined_on_date);
            const timeDiff = Math.abs(currDate.getTime() - dineDate.getTime());
            const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
            return dayDiff > 7
          })() ?
            `Dined on ${DateFns.format(props.review.dined_on_date, 'MMMM Do, YYYY')}` :  
            `Dined ${DateFns.distanceInWordsToNow(props.review.dined_on_date)} ago`
        }</span>
      </div>
    </div>
    <div className={styles.reviewscores}>
      <span className={styles.reviewscore}>{`Overall  ${props.review.overall_score} · `}</span>
      <span className={styles.reviewscore}>{`Food  ${props.review.food_score} · `}</span>
      <span className={styles.reviewscore}>{`Service  ${props.review.service_score} · `}</span>
      <span className={styles.reviewscore}>{`Ambience  ${props.review.ambience_score}`}</span>
    </div>
  </div>
);

ReviewRatings.propTypes = {
  review: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ReviewRatings;
