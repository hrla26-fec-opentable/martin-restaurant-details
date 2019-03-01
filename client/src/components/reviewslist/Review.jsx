import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewUser from './ReviewUser';
import ReviewBody from './ReviewBody';
import styles from '../../styles/reviewslist/Review';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overflow: false,
      expanded: false,
    };
  };

  componentDidMount = () => {
    const overflow = this.hasOverflow();
    if (overflow !== this.state.overflow) {
      this.setState({ overflow });
    }
  };

  componentDidUpdate = () => {
    const overflow = this.hasOverflow();
    if (overflow !== this.state.overflow) {
      this.setState({ overflow });
    }
  };

  hasOverflow = () => {
    const id = `review${this.props.index}`;
    const element = document.getElementById(id);
    return element.scrollHeight > element.clientHeight;
  };

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render = () => (
    <div className={this.state.expanded ? styles.review + ' ' + styles.reviewexpanded: styles.review}>
      <ReviewUser
        username={this.props.review.username}
        userInitials={this.props.review.user_initials}
        userCity={this.props.review.user_city}
        reviewCount={this.props.review.user_total_reviews}
      />
      <ReviewBody
        review={this.props.review}
        toggleExpanded={this.toggleExpanded}
        expanded={this.state.expanded}
        overflow={this.state.overflow}
        index={this.props.index}
      />
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
};

export default Review;
