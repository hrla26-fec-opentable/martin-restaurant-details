import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters.jsx';
import SortByMenu from './SortByMenu.jsx';
import styles from '../../styles/toolbar/Toolbar.css';

const Toolbar = (props) => (
  <div className={styles.toolbar}>
    <SortByMenu
      sortDropdownOpen={props.sortDropdownOpen}
      selectedSortBy={props.selectedSortBy}
      updateSelectedSortBy={props.updateSelectedSortBy}
      toggleSortDropdown={props.toggleSortDropdown}
    />
    <Filters
      reviews={props.reviews}
      reviewsFilters={props.reviewsSummary.reviewsFilters}
      toggleFilter={props.toggleFilter}
      selectedFilters={props.selectedFilters}
    />
  </div>
);

Toolbar.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewsSummary: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedSortBy: PropTypes.string.isRequired,
  sortDropdownOpen: PropTypes.bool.isRequired,
  updateSelectedSortBy: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilter: PropTypes.func.isRequired,
  toggleSortDropdown: PropTypes.func.isRequired,
};

export default Toolbar;


