import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/reviewslist/ReviewText.css';

const ReviewText = (props) => (
  <div id={`review${props.index}`} className={props.expanded ? styles.reviewtext + ' ' + styles.reviewtextexpanded : styles.reviewtext}>
    {props.reviewText}
  </div>
);

ReviewText.propTypes = {
  reviewText: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default ReviewText;
