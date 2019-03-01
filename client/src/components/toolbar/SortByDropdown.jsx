import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/toolbar/SortByDropdown.css';

const SortByDropdown = (props) => (
  <div className={styles.sortbydropdown}>
    <div className={styles.sortbydropdownitem} onClick={() => props.updateSelectedSortBy('Newest')}>
      <div className={props.selectedSortBy === 'Newest' ? styles.dropdowncirclefull : styles.dropdowncircleempty}></div>
      <span>Newest</span>
    </div>
    <div className={styles.sortbydropdownitem} onClick={() => props.updateSelectedSortBy('Highest Rating')}>
        <div className={props.selectedSortBy === 'Highest Rating' ? styles.dropdowncirclefull : styles.dropdowncircleempty}></div>
        <span>Highest Rating</span>
    </div>
    <div className={styles.sortbydropdownitem} onClick={() => props.updateSelectedSortBy('Lowest Rating')}>
      <div className={props.selectedSortBy === 'Lowest Rating' ? styles.dropdowncirclefull : styles.dropdowncircleempty}></div>
      <span>Lowest Rating</span>
    </div>
  </div>
);

SortByDropdown.propTypes = {
  selectedSortBy: PropTypes.string.isRequired,
  updateSelectedSortBy: PropTypes.func.isRequired,
};

export default SortByDropdown;
