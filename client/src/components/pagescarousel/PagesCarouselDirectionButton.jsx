import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/pagescarousel/PagesCarouselDirectionButton.css';

const PagesCarouselDirectionButton = (props) => (
  <div className={styles.pagedirectionbuttoncontainer}>
    <div className={styles.pagedirectionbutton} onClick={
      () => {props.updateReviewsPage((props.direction === 'next' ? props.currentReviewsPage + 1 : props.currentReviewsPage - 1));}
    }>
      {
        props.direction === 'next' ? 
        <img className={styles.changereviewspagebutton} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_next_page_button.png"></img> :
        <img className={styles.changereviewspagebutton} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_prev_page_button.png"></img>
      }
    </div>
  </div>
);

PagesCarouselDirectionButton.propTypes = {
  direction: PropTypes.string.isRequired,
  updateReviewsPage: PropTypes.func.isRequired,
  currentReviewsPage: PropTypes.number.isRequired,
};

export default PagesCarouselDirectionButton;
