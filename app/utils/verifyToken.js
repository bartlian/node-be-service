const jsonwebtoken = require("jsonwebtoken");
const { secret }= require('../config/config.js');

const verifyToken = function(token) {
  return jsonwebtoken.verify(token, secret, function(err, decoded) {
    if (err) {
      return {
        status: false,
      };   
    }
  
    return {
      status: true,
      userCode: decoded.code,
    };
  });
}


module.exports = verifyToken;