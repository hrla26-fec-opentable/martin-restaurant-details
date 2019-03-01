import React from 'react';
import PropTypes from 'prop-types';
import SummaryScoreAvg from './SummaryScoreAvg';
import styles from '../../styles/summary/SummaryText';

const SummaryText = props => {
  let overallScore = props.reviewsSummary.avg_overall, overallScoreStars = [];

  for (let i = 0; i < 5; i += 1) {
    if (overallScore - i  >= 1) {
      overallScoreStars.push('red');
    } else if (overallScore - i >= 0) {
      overallScoreStars.push('half');
    } else {
      overallScoreStars.push('gray');
    }
  }

  return (
    <div className={styles.summarytext}>
      <div className={styles.summarysubheader + ' ' + styles.summarytextitem}>Overall Ratings and Reviews</div>
      <div className={styles.summarytextitem}>Reviews can only be made by diners who have eaten at this restaurant</div>
      <div className={styles.summaryrecentratings + ' ' + styles.summarytextitem}>
        <div className={styles.summaryrecentratingsstars}>
          {overallScoreStars.map((star, i) => (
            <img className={styles.summaryrecentratingsstar} src={`https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_star_${star}.png`} key={i}></img>
          ))}
        </div>
        <span className={styles.summaryrecentratingsstartext}>{props.reviewsSummary.avg_overall} based on recent ratings</span>
      </div>
      <div className={styles.summaryscoreavgs + ' ' + styles.summarytextitem}>
        <SummaryScoreAvg score={props.reviewsSummary.avg_food} category="Food" />
        <SummaryScoreAvg score={props.reviewsSummary.avg_service} category="Service" />
        <SummaryScoreAvg score={props.reviewsSummary.avg_ambience} category="Ambience" />
        <SummaryScoreAvg score={props.reviewsSummary.avg_value} category="Value" />
      </div>
      <div className={styles.summarynoise + ' ' + styles.summarytextitem}>
        <img className={styles.summaryimgsmall} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_noise_level.png"></img>
        <strong>Noise · </strong>&nbsp;Moderate
      </div>
      <div className={styles.summarypctrecommend + ' ' + styles.summarytextitem}>
        <img className={styles.summaryimgsmall} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_recommend_thumb.png"></img>
        <strong>{parseInt(props.reviewsSummary.pct_recommend * 100) + '% of people '}</strong>&nbsp;would recommend it to a friend
      </div>
    </div>
  );
};

SummaryText.propTypes = {
  reviewsSummary: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SummaryText;
