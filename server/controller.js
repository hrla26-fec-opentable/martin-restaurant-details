const dbHelpers = require('../db/db.helpers');

module.exports = {
  all: {
    get: (req, res) => {
      const { restaurantId } = req.params;
      dbHelpers.getAllReviews(restaurantId)
        .spread((data) => { res.status(200).send(data); })
        .catch((err) => { console.error(err); });
    },
    post: (req, res) => {
      const { newReview } = req.body;
      dbHelpers.addReview(newReview)
        .spread(() => { res.status(200).send(); })
        .catch((err) => { console.error(err); });
    },
  },
  summary: {
    get: (req, res) => {
      const { restaurantId } = req.params;
      dbHelpers.getReviewsSummary(restaurantId)
        .spread((data) => {
          const reviewsSummary = {
            ...data[0],
            reviewsFilters: [
              data[0].review_filter_1,
              data[0].review_filter_2,
              data[0].review_filter_3,
              data[0].review_filter_4,
              data[0].review_filter_5,
            ],
          };
          for (let i = 1; i <= 5; i += 1) { delete reviewsSummary[`review_filter_${i}`]; }

          res.status(200).send(reviewsSummary);
        })
        .catch((err) => { console.error(err); });
    },
  },
};
