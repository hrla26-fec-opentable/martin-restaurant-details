import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import PagesCarouselNumberButton from './PagesCarouselNumberButton.jsx';
import PagesCarouselDirectionButton from './PagesCarouselDirectionButton.jsx';
import PagesCarouselEllipsis from './PagesCarouselEllipsis.jsx';
import styles from '../../styles/pagescarousel/PagesCarousel.css';

const PagesCarousel = (props) => {
  let selectedReviews = props.selectedReviews();

  const totalPages = Math.ceil(selectedReviews.length / props.reviewsPerPage);
  let pageNumbers = [1, props.currentReviewsPage - 1, props.currentReviewsPage, props.currentReviewsPage + 1, totalPages];
  pageNumbers = _.uniq(pageNumbers); // remove duplicates
  pageNumbers = pageNumbers.filter(num => ( num >= 1 && num <= totalPages )); // remove pagenumbers out of range

  if (props.currentReviewsPage === 1 && !pageNumbers.includes(3) && totalPages >= 3) { // if current page = 1, add page number 3
    pageNumbers.splice(2, 0, 3);
  } else if (props.currentReviewsPage === totalPages && !pageNumbers.includes(totalPages - 2) && totalPages > 2) { // if current page = n, add page # n - 2
    pageNumbers.splice(pageNumbers.length - 2, 0, totalPages - 2);
  }

  for (let i = 0; i < pageNumbers.length; i++) {
    if ((pageNumbers[i] !== '···') && (pageNumbers[i] < pageNumbers[i + 1] - 1)) {
      pageNumbers.splice(i + 1, 0, '···');
    }
  }

  if (totalPages > 1) {
    return (
      <div className={styles.pagescarousel}>
        <PagesCarouselDirectionButton
          direction="prev"
          updateReviewsPage={props.updateReviewsPage}
          currentReviewsPage={props.currentReviewsPage}
        />
        <div className={styles.pagenumberbuttonslist}>
          {pageNumbers.map((pageNumber, i) => (
            pageNumber === '···' ? 
            <PagesCarouselEllipsis key={i}/> :
            <PagesCarouselNumberButton
              pageNumber={pageNumber}
              updateReviewsPage={props.updateReviewsPage}
              currentReviewsPage={props.currentReviewsPage}
              key={i}
            />
          ))}
        </div>
        <PagesCarouselDirectionButton
          direction="next"
          updateReviewsPage={props.updateReviewsPage}
          currentReviewsPage={props.currentReviewsPage}
        />
      </div>
    );
  } else {
    return null;
  }
};

PagesCarousel.propTypes = {
  selectedReviews: PropTypes.func.isRequired,
  currentReviewsPage: PropTypes.number.isRequired,
  reviewsPerPage: PropTypes.number.isRequired,
  updateReviewsPage: PropTypes.func.isRequired,
};

export default PagesCarousel;
