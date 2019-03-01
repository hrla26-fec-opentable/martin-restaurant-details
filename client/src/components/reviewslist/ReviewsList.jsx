import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import styles from '../../styles/reviewslist/ReviewsList';

const ReviewsList = props => (
  <div className={styles.reviewslist}>
    {props.selectedReviews()
      .filter((review, i) => {
        const minIndex = (props.currentReviewsPage - 1) * props.reviewsPerPage;
        const maxIndex = minIndex + props.reviewsPerPage - 1;
        return i >= minIndex && i <= maxIndex;
      })
      .map((review, i) => (
        <Review
          review={review}
          index={i}
          key={i}
        />
      )
    )}
  </div>
);

ReviewsList.propTypes = {
  selectedReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewsPerPage: PropTypes.number.isRequired,
  currentReviewsPage: PropTypes.number.isRequired,
};

export default ReviewsList;
