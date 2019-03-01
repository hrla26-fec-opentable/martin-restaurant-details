import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/toolbar/Filter.css';

const Filter = (props) => {
  const reviewCount = props.reviews.filter(review => (
    review.review_text.toLowerCase().includes(props.filter.toLowerCase())
  )).length;

  return (
    <div className={props.clicked ? styles.filter + ' ' + styles.filterclicked : styles.filter} onClick={ ()=>{props.toggleFilter(props.filter)} }>
      <img className={styles.filtercheckbox} src={props.clicked ? 
        "https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_reviews_checkbox_full.png"
        : "https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_reviews_checkbox_empty.png"}
      ></img>
      <span>{`${props.filter} ${props.filter.slice(1, 6) === ' Star' ? '' : `(${reviewCount})`}`}</span>
    </div>
  );
};

Filter.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  clicked: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default Filter;
