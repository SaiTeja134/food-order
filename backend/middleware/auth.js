const jwt = require('jsonwebtoken');

exports.generateToken = (id) => {
  return jwt.sign({ id }, 'your_secret_key', { expiresIn: '1h' });
};



exports.validateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(400).json({ error: true, message: 'Authentication failed' });
  }

  try {
    jwt.verify(token, 'your_secret_key');
    next();
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Authentication failed' });
  }
};

exports.resetToken = (user) => {
  return jwt.sign(user,'your_secret_key', {expiresIn:'15m'})
}