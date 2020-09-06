const SceneryService = require('../service/scenery');
const { secret }= require('../config/config.js');
const jsonwebtoken = require("jsonwebtoken");
const verifyToken = require('../utils/verifyToken.js');
const wrapperMsg = require('../utils/wrapperMsg.js');

class UserController {
  async find(ctx) {
    const res = await SceneryService.find(ctx);
    console.log(res);
    ctx.body = res;
  }
}

module.exports = new UserController();