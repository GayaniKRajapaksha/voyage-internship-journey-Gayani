const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // 1) try Authorization header
  const authHeader = req.headers['authorization'];
  const tokenFromHeader = authHeader && authHeader.split(' ')[0] === 'Bearer' ? authHeader.split(' ')[1] : null;

  // 2) fallback to cookie
  const token = tokenFromHeader || req.cookies?.token;
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
      // you can validate issuer/audience here
    });
    // attach minimal info
    req.user = { id: payload.sub, email: payload.email || payload.sub };
    next();
  } catch (err) {
    console.error(err);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
