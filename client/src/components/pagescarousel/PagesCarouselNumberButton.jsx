import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/pagescarousel/PagesCarouselNumberButton.css';

const ReviewsPagesCarouselNumberButton = (props) => (
  <div className={styles.pagenumberbuttoncontainer}>
    <div
      className={styles.pagenumberbutton + ' ' + (props.pageNumber === props.currentReviewsPage ? styles.currentpagenumberbutton : '')}
      onClick={ () => {props.updateReviewsPage(props.pageNumber);} }
    >
      {props.pageNumber}
    </div>
  </div>
);

ReviewsPagesCarouselNumberButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  updateReviewsPage: PropTypes.func.isRequired,
  currentReviewsPage: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
};

export default ReviewsPagesCarouselNumberButton;
