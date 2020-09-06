const UserService = require('../service/user');
const { secret }= require('../config/config.js');
const jsonwebtoken = require("jsonwebtoken");
const verifyToken = require('../utils/verifyToken.js');
const wrapperMsg = require('../utils/wrapperMsg.js');

class UserController {
  async find(ctx) {
    const token = ctx.headers['x-access-token'];
    const obj = verifyToken(token);
    console.log(obj);

    if (!obj.status) {
      ctx.body = wrapperMsg('F', '无访问权限');
    }
    const res = await UserService.find(ctx);
    ctx.body = res;
  }
  async findByCode(ctx) {
    const { originalUrl } = ctx;
    const userCode = originalUrl.split('/user/')[1];
    const res = await UserService.findByCode(userCode);
    
    if (res.length === 0) {
      ctx.body = wrapperMsg('F', '请求参数有误');
    }

    ctx.body = wrapperMsg('S', res[0]);
  }
  async create(ctx) {
    const { account, password, nickName } = ctx.request.body;
    const res = await UserService.create(account, password, nickName);

    ctx.body = wrapperMsg('S', '创建成功');
  }
  async login(ctx, next) {
    const { account, password } = ctx.request.body;

    if (!account || !password) {
      ctx.body = wrapperMsg('F', '缺少参数');
      return;
    }

    let res = await UserService.login(account, password);

    if (res.length === 0) {
      ctx.body = wrapperMsg('F', '账号名或密码错误');
      return;
    }

    res = res[0];
    const token = jsonwebtoken.sign({ code: res.code }, secret, { expiresIn: "1d" });
    ctx.body = wrapperMsg('S', Object.assign(res, { token }));
  }
}

module.exports = new UserController();