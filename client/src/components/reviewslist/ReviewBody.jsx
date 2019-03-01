import React from 'react';
import PropTypes from 'prop-types';
import ReviewRatings from './ReviewRatings';
import ReviewText from './ReviewText';
import ReviewFooter from './ReviewFooter';
import styles from '../../styles/reviewslist/ReviewBody';

const ReviewBody = (props) => (
  <div className={styles.reviewbody}>
    <ReviewRatings review={props.review} />
    <ReviewText
      reviewText={props.review.review_text}
      expanded={props.expanded}
      index={props.index}
    />
    <ReviewFooter
      toggleExpanded={props.toggleExpanded}
      overflow={props.overflow}
      expanded={props.expanded}
    />
  </div>
);

ReviewBody.propTypes = {
  review: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  overflow: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default ReviewBody;
