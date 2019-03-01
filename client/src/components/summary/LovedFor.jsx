import React, { Component } from 'react';
import LovedForItem from './LovedForItem';
import helpers from '../../lib/helpers';
import styles from '../../styles/summary/LovedFor';

class LovedFor extends Component {
  constructor(props) {
    super(props);
    const lovedForItems = helpers.getLovedForItemsList();
    this.state = {
      lovedForItems,
    };
  };

  render = () => (
    <div className={styles.lovedfor + ' ' + styles.reviewssummarytextitem}>
      <div className={styles.lovedforheader}>
        Loved For
        <img className={styles.info} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_reviews_summary_info_icon.png"></img>
      </div>
      <div className={styles.lovedforitemslist}>
        {this.state.lovedForItems.map((a, i) => (
          <LovedForItem
            item={a.item}
            city={a.city}
            key={i}
          />
        ))}
      </div>
      <div className={styles.bestrestaurantscontainer + ' ' + styles.reviewssummarytextitem}>
        <div>
          <span className={styles.bestrestaurants}>Best Restaurants in Downtown ›</span>
        </div>
      </div>
    </div>
  );
}

export default LovedFor;
