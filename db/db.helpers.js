const db = require('./index.js');

module.exports = {
  getAllReviews: restaurantId => db.query(`
    SELECT
      rd.*,
      u.username,
      u.user_initials,
      u.user_city,
      a.user_total_reviews
    FROM reviews_detail rd
    JOIN users u
      ON rd.user_id = u.id
    JOIN (
      SELECT
        user_id,
        count(*) user_total_reviews
      FROM reviews_detail
      GROUP BY user_id) a
      ON rd.user_id = a.user_id
    WHERE restaurant_id = ${restaurantId};    
  `),
  getReviewsSummary: restaurantId => db.query(`
    SELECT* FROM reviews_summary WHERE restaurant_id = ${restaurantId};
  `),
};
