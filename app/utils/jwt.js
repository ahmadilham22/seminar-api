const jwt = require('jsonwebtoken');
const { jwtExpiration, jwtsecret } = require('../config');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtsecret, {
    expiresIn: jwtExpiration,
  });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, jwtsecret);

module.exports = {
  createJWT,
  isTokenValid,
};
