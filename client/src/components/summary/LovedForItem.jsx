import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/summary/LovedForItem';

const LovedForItem = (props) => (
  <div className={styles.lovedforitem}>
    <div className={styles.lovedforitemcontents}>

      <div className={styles.lovedforiconcontainer}>
        <img className={styles.lovedforicon} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_loved_for_icon.png"></img>
      </div>
      <div className={styles.lovedforitemtext}>
        <div className={styles.lovedforitemtextheader}>{props.item}</div>
        <div className={styles.lovedforitemtextcity}>{props.city}</div>
      </div>

    </div>
  </div>
);

LovedForItem.propTypes = {
  item: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};

export default LovedForItem;
