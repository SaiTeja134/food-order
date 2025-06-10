
const Rating = require('../models/rating');

const addRatings = async (req, res) => {
  try {
    const { customerId,  rating, feedback } = req.body;
    if (!customerId  || !rating || !feedback) {
      return res.status(400).json({ error: true, message: 'Bad request' });
    }
    const newRating = await Rating.insertMany([{ customerId, rating, feedback }]);
    res.status(200).json(newRating);
  } catch (error) {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
};

const getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    if (ratings.length === 0) {
      return res.status(400).json({ message: 'No ratings found' });
    }
    res.json(ratings);
  } catch (error) {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
};

const getRatingsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const ratings = await Rating.find({ customerId: userId })
    return res.status(200).json({
      error: false,
      message: 'Ratings fetched successfully',
      data: ratings
    });
  } catch (error) {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
}

module.exports = { addRatings, getAllRatings, getRatingsByUserId };