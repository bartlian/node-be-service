const Router = require('@koa/router');
const router = new Router({ prefix: '/api' });
const userController = require('../controller/user');
const sceneryController = require('../controller/scenery');
const koaBody = require('koa-body');

// 查询所有
router.get('/user', userController.find);
// 新增
router.post('/user', koaBody(), userController.create);
// 查询某个
router.get('/user/:code', koaBody(), userController.findByCode);
// 登录
router.post('/login', koaBody(), userController.login);

router.get('/scenery', sceneryController.find);
module.exports = router;
