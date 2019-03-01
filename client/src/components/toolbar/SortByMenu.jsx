import React from 'react';
import PropTypes from 'prop-types';
import SortBySelect from './SortBySelect.jsx';
import SortByDropdown from './SortByDropdown.jsx';
import styles from '../../styles/toolbar/SortByMenu.css';

const SortbyMenu = (props) => (
  <div className={styles.sortbymenu}>
    <div>Sort by</div>
    <SortBySelect 
      selectedSortBy={props.selectedSortBy}
      sortDropdownOpen={props.sortDropdownOpen}
      toggleSortDropdown={props.toggleSortDropdown}
    />
    {props.sortDropdownOpen ? 
    <SortByDropdown
      selectedSortBy={props.selectedSortBy}
      updateSelectedSortBy={props.updateSelectedSortBy}
    />
    : null}
  </div>
);

SortbyMenu.PropTypes = {
  sortDropdownOpen: PropTypes.bool.isRequired,
  selectedSortBy: PropTypes.string.isRequired,
  updateSelectedSortBy: PropTypes.func.isRequired,
  toggleSortDropdown: PropTypes.func.isRequired,
};

export default SortbyMenu;
