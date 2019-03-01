import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/reviewslist/ReviewUser.css';

const ReviewUser = (props) => {
  const colors = ['#df4e96', '#6c8ae4', '#d86441', '#bb6acd'];
  const randomColor = colors[(props.username.length % colors.length)];
  const randomDigit = parseInt(props.username.length.toString().split('').pop());

  return (
    <div className={styles.reviewuser}>
      <div className={styles.userinitialscontainer}>
        {randomDigit < 3 ? <div className={styles.vip}><span>VIP</span></div> : null}
        <div style={{'backgroundColor':randomColor}} className={styles.reviewuserinitials}>
          <span>{props.userInitials}</span>
        </div>
      </div>
      <div className={styles.reviewusername}>{props.username}</div>
      <div className={styles.reviewusercity}>{props.userCity}</div>
      <div className={styles.reviewuserreviewcount}>
        <img className={styles.reviewuserreviewcounticon} src="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/tableit_review_user_comments_icon.png"></img>
        <span>{props.reviewCount + ' reviews'}</span>
      </div>
    </div>
  );
};

ReviewUser.propTypes ={
  username: PropTypes.string.isRequired,
  userInitials: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default ReviewUser;
