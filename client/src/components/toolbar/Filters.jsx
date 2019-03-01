import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter.jsx';
import styles from '../../styles/toolbar/Filters.css';

const Filters = (props) => (
  <div className={styles.filters}>
    Filters
    <div className={styles.filterslist}>
      {props.reviewsFilters.map((filter, i) => (
        <Filter
          reviews={props.reviews}
          filter={filter}
          key={i}
          index={i}
          clicked={props.selectedFilters.includes(filter)}
          toggleFilter={props.toggleFilter}
        />
      ))}
    </div>
  </div>
);

Filters.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewsFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filters;
